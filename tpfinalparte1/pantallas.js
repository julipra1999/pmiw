function manejoDePantallas() {
  if (estado == 0) {
    if (detectarClic(360, 400, 100, 50)) {
      estado = 1;
    } else if (detectarClic(160, 400, 100, 50)) {
      estado = 23;
    }
  } else if (estado === 22 || estado === 23) {
    if (detectarClic(270, 400, 100, 50)) {
      estado = 0;
    }
  } else if (estado == 1 || estado == 2 || estado == 3 ||
    estado == 6 || estado == 7 || estado == 8 || estado == 10 ||
    estado == 11 || estado == 12 || estado == 13 || estado == 14 || estado == 15 ||
    estado == 17 || estado == 18 || estado == 20 || estado == 21) {
    if (detectarClic(270, 400, 100, 50)) {
      estado++;
    }
  } else if (estado === 4 || estado === 9 || estado === 16 || estado === 19) {
    if (detectarClic(110, 400, 100, 50)) {
      if (estado == 4) {
        estado = 6;
      } else if (estado == 9) {
        estado = 14;
      } else if (estado == 16) {
        estado = 17;
      } else if (estado == 19) {
        estado = 21;
      }
    } else if (detectarClic(430, 400, 100, 50)) {
      if (estado == 16) {
        estado = 18;
      } else {
        estado++;
      }
    }
  } else if (estado == 5 && detectarClic(270, 400, 100, 50)) {
    estado = 7;
  }
}

function detectarClic(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
