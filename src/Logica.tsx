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

  return resultado.map((integrante) => ({ nombre: integrante.nombre, aQuienesLeDebe: [] }));
}

export function calcular(integrantes: IntegranteDelGrupo[]): Deudor[] {
  const totalGastado = calcularTotalGastado(integrantes);
  const cuantoPoneCadaUno = calcularCuantoTieneQuePonerCadaUno(totalGastado, integrantes.length);
  const tienenQueCobrarAlgo = calcularAQuienesHayQueDarlePlata(integrantes, cuantoPoneCadaUno);
  const tienenQuePagarAlgo = calcularQuienesFaltaPonerPlata(integrantes, cuantoPoneCadaUno);

  return [];
}
