export interface IntegranteDelGrupo {
  nombre: string;
  plataQuePuso: number;
}

export interface Acreedores {
  nombre: string;
  leDebe: number;
}

export interface Deudores {
  nombre: string;
  aQuienesLeDebe: Acreedores[];
}

export function calcular(integrantes: IntegranteDelGrupo[]): Deudores[] {
  //const totalGastado = calcularTotalGastado(integrantes);
  return [];
}

export function calcularTotalGastado(
  integrantes: IntegranteDelGrupo[]
): number {
  return integrantes.reduce((n, { plataQuePuso }) => n + plataQuePuso, 0);
}

export function calcular2() {
  return "";
}
