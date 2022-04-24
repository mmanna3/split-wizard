export interface IntegranteDelGrupo {
  nombre: string;
  plataQuePuso: number;
}

export interface Acreedor {
  nombre: string;
  cuantoTieneQueCobrar: number;
}

export interface Deudor {
  nombre: string;
  cuantoDebeEnTotal: number,
  aQuienesLeDebe: Acreedor[];
}

export function calcularTotalGastado(
  integrantes: IntegranteDelGrupo[]
): number {
  return integrantes.reduce((n, { plataQuePuso }) => n + plataQuePuso, 0);
}

export function calcularCuantoTieneQuePonerCadaUno(totalGastado: number, cantidadDeIntegrantes: number): number {
  return totalGastado / cantidadDeIntegrantes;
}

export function calcularAQuienesHayQueDarlePlata(integrantes: IntegranteDelGrupo[], cuantoPoneCadaUno: number): Acreedor[] {
  const resultado = integrantes.filter((integrante) => integrante.plataQuePuso > cuantoPoneCadaUno);

  return resultado.map((integrante) => ({ nombre: integrante.nombre,
    cuantoTieneQueCobrar: integrante.plataQuePuso - cuantoPoneCadaUno,
  }));
}

export function calcularQuienesFaltaPonerPlata(integrantes: IntegranteDelGrupo[], cuantoPoneCadaUno: number): Deudor[] {
  const resultado = integrantes.filter((integrante) => integrante.plataQuePuso < cuantoPoneCadaUno);

  return resultado.map((integrante) => ({
    nombre: integrante.nombre,
    cuantoDebeEnTotal: cuantoPoneCadaUno - integrante.plataQuePuso,
    aQuienesLeDebe: []
  }));
}

export function calcular(integrantes: IntegranteDelGrupo[]): Deudor[] {
  const totalGastado = calcularTotalGastado(integrantes);
  const cuantoPoneCadaUno = calcularCuantoTieneQuePonerCadaUno(totalGastado, integrantes.length);
  const tienenQueCobrarAlgo = calcularAQuienesHayQueDarlePlata(integrantes, cuantoPoneCadaUno);
  const tienenQuePagarAlgo = calcularQuienesFaltaPonerPlata(integrantes, cuantoPoneCadaUno);

  // const resultado = [];

  tienenQueCobrarAlgo.forEach((acreedor) => {
    let cuantoLeFaltaAlAcreedor = acreedor.cuantoTieneQueCobrar;

    // while (cuantoLeFaltaAlAcreedor > 0) {
    for (let i = 0; i < tienenQuePagarAlgo.length; i++) {
      // Que pasa cuando la variable de abajo es negativa
      const debeMenosDeLoQueTieneQueCobrarElAcreedor = cuantoLeFaltaAlAcreedor
      - tienenQuePagarAlgo[i].cuantoDebeEnTotal >= 0;

      if (debeMenosDeLoQueTieneQueCobrarElAcreedor) {
        const cuantoPagaElDeudor = tienenQuePagarAlgo[i].cuantoDebeEnTotal;
        tienenQuePagarAlgo[i].aQuienesLeDebe.push(
          {
            nombre: acreedor.nombre,
            cuantoTieneQueCobrar: cuantoPagaElDeudor
          }
        );
        cuantoLeFaltaAlAcreedor -= cuantoPagaElDeudor;
      } else { // si debe mas de lo que tiene que cobrar el acreedor
        const cuantoPagaElDeudor = cuantoLeFaltaAlAcreedor;
        tienenQuePagarAlgo[i].aQuienesLeDebe.push(
          {
            nombre: acreedor.nombre,
            cuantoTieneQueCobrar: cuantoPagaElDeudor
          }
        );
        cuantoLeFaltaAlAcreedor -= cuantoPagaElDeudor; // O sea que al acreedor ya no le falta nada (o sea =0)
        tienenQuePagarAlgo[i].cuantoDebeEnTotal -= cuantoPagaElDeudor;
      }
    }
    // }
  });

  return tienenQuePagarAlgo;
}
