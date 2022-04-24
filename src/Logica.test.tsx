import {
  calcular,
  calcularTotalGastado,
  IntegranteDelGrupo,
  Deudores,
} from "./Logica";

test.skip("3 integrantes, 1 solo deudor", () => {
  const integrantes: IntegranteDelGrupo[] = [
    { nombre: "Ferra", plataQuePuso: 1000 },
    { nombre: "Manita", plataQuePuso: 500 },
    { nombre: "Cami", plataQuePuso: 0 },
  ];

  const deudoresEsperados: Deudores[] = [
    { nombre: "Ferra", aQuienesLeDebe: [] },
    { nombre: "Manita", aQuienesLeDebe: [] },
    { nombre: "Cami", aQuienesLeDebe: [{ nombre: "Ferra", leDebe: 500 }] },
  ];

  const deudores = calcular(integrantes);
  expect(deudores).toBe(deudoresEsperados);
});

test("Suma correctamente el total gastado", () => {
  const integrantes: IntegranteDelGrupo[] = [
    { nombre: "Ferra", plataQuePuso: 1000 },
    { nombre: "Manita", plataQuePuso: 500 },
    { nombre: "Cami", plataQuePuso: 0 },
  ];

  const totalGastadoEsperado = 1500;

  const totalGastado = calcularTotalGastado(integrantes);
  expect(totalGastado).toBe(totalGastadoEsperado);
});
