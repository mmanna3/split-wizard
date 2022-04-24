import {
  calcular,
  calcularTotalGastado,
  calcularAQuienesHayQueDarlePlata,
  calcularQuienesFaltaPonerPlata,
  IntegranteDelGrupo,
  Deudor,
  Acreedor,
} from "./Logica";

const integrantes: IntegranteDelGrupo[] = [
  { nombre: "Ferra", plataQuePuso: 1300 },
  { nombre: "Manita", plataQuePuso: 500 },
  { nombre: "Cami", plataQuePuso: 0 },
];

test.skip("3 integrantes, 1 solo deudor", () => {
  const deudoresEsperados: Deudor[] = [
    {
      nombre: "Manita",
      cuantoDebeEnTotal: 100,
      aQuienesLeDebe: [{ nombre: "Ferra", cuantoTieneQueCobrar: 100 }],
    },
    {
      nombre: "Cami",
      cuantoDebeEnTotal: 600,
      aQuienesLeDebe: [{ nombre: "Ferra", cuantoTieneQueCobrar: 600 }],
    },
  ];

  const deudores = calcular(integrantes);
  expect(deudores).toBe(deudoresEsperados);
});

test("Suma correctamente el total gastado", () => {
  const totalGastadoEsperado = 1800;

  const totalGastado = calcularTotalGastado(integrantes);
  expect(totalGastado).toBe(totalGastadoEsperado);
});

test("Quienes pusieron mas de 600 deben recibir plata", () => {
  const acreedoresEsperados: Acreedor[] = [
    { nombre: "Ferra", cuantoTieneQueCobrar: 700 },
  ];

  const acreedores = calcularAQuienesHayQueDarlePlata(integrantes, 600);
  expect(acreedores).toEqual(acreedoresEsperados);
});

test("Quienes pusieron menos de 600 deben poner plata", () => {
  const deudoresEsperados: Deudor[] = [
    { nombre: "Manita", cuantoDebeEnTotal: 100, aQuienesLeDebe: [] },
    { nombre: "Cami", cuantoDebeEnTotal: 600, aQuienesLeDebe: [] },
  ];

  const deudores = calcularQuienesFaltaPonerPlata(integrantes, 600);
  expect(deudores).toEqual(deudoresEsperados);
});
