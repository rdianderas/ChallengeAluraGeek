import {productService } from "../services/product-service.js";
const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = document.querySelector("[data-url]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const precioSinDescuento = document.querySelector("[data-precio-sin-descuento]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  const alt = document.querySelector("[data-alt]").value;
  const destacado = document.querySelector("[data-destacado]").value;

  productService
    .creaProdutos(nombre, url, precio, precioSinDescuento, alt, categoria, descripcion, destacado)
    .then((respuesta) => {
      window.location.href = "../mantenedor-productos.html";
      console.log(respuesta);
    })
    .catch((err) => {
      console.log(err);
    });
});