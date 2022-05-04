import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Clase 11 - Actividad</h1>

<div>
Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números que están entre ellos.
</div>`;
//const numeroA: number = Number(prompt("Ingrese el primer valor"));
//const numeroB: number = Number(prompt("Ingrese el segundo valor"));
const numeroA = 4;
const numeroB = 2;
let suma: number = 0;
if (numeroA > numeroB) {
  /* Opción 1 */
  // const aux: number = numeroA;
  // numeroA = numeroB;
  // numeroB = aux;

  /* Opcion 2 */
  numeroA += numeroB;
  numeroB = numeroA - numeroB;
  numeroA -= numeroB;
}
for (let i = numeroA; i <= numeroB; i++) {
  suma += i;
}
console.log(`El resulta de la suma es ${suma}`);
