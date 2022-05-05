const btnCalcular = document.getElementById("btnCalcular");
let etiquetaResultado = document.getElementById("etiquetaResultado");
let nuevoSueldo = 0;
btnCalcular.addEventListener("click", () => {
  const inputSueldo = Number(document.getElementById("inputSueldo").value);
  /* Usando If
  // if (inputSueldo > 0 && inputSueldo < 15001) {
  //   nuevoSueldo = inputSueldo * 1.2;
  //   etiquetaResultado.value = `Le corresponde un aumento del %20, su sueldo con el aumento incluido será de $ ${nuevoSueldo}`;
  // } else if (inputSueldo > 15000 && inputSueldo < 20001) {
  //   nuevoSueldo = inputSueldo * 1.1;
  //   etiquetaResultado.value = `Le corresponde un aumento del %10, su sueldo con el aumento incluido será de $ ${nuevoSueldo}`;
  // } else if (inputSueldo > 20000 && inputSueldo < 25001) {
  //   nuevoSueldo = inputSueldo * 1.05;
  //   etiquetaResultado.value = `Le corresponde un aumento del %5, su sueldo con el aumento incluido será de $ ${nuevoSueldo}`;
  // } else if (inputSueldo > 25000) {
  //   etiquetaResultado.value = `No le corresponde aumento. Su sueldo es de $ ${inputSueldo}`;
  // }

  
  /* Usando Switch */
  switch (true) {
    case inputSueldo > 0 && inputSueldo < 15001: {
      nuevoSueldo = inputSueldo * 1.2;
      etiquetaResultado.value = `Le corresponde un aumento del %20, su sueldo con el aumento incluido será de $ ${nuevoSueldo}`;
      break;
    }
    case inputSueldo > 15000 && inputSueldo < 20001: {
      nuevoSueldo = inputSueldo * 1.1;
      etiquetaResultado.value = `Le corresponde un aumento del %10, su sueldo con el aumento incluido será de $ ${nuevoSueldo}`;
      break;
    }
    case inputSueldo > 20000 && inputSueldo < 25001: {
      nuevoSueldo = inputSueldo * 1.05;
      etiquetaResultado.value = `Le corresponde un aumento del %5, su sueldo con el aumento incluido será de $ ${nuevoSueldo}`;
      break;
    }
    case inputSueldo > 25000: {
      nuevoSueldo = inputSueldo * 1.05;
      etiquetaResultado.value = `No le corresponde aumento. Su sueldo es de $ ${inputSueldo}`;
      break;
    }
  }
});
