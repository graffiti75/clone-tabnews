/*
test("nome do teste", () => {
  console.log("Is this function being called?");
});

test("testando outra condição do meu sistema", () => {
  console.log("Another test");
});

test("espero que 1 seja 1", () => {
  expect(1).toBe(1);
});
*/

const calculadora = require("../../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 'banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
