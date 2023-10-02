import {productService } from "../services/product-service.js";
const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const url = document.querySelector("[data-url]");
const categoria = document.querySelector("[data-categoria]");
const nombre = document.querySelector("[data-nombre]");
const precio = document.querySelector("[data-precio]");
const precioSinDescuento = document.querySelector("[data-precio-sin-descuento]");
const descripcion = document.querySelector("[data-descripcion]");
const alt = document.querySelector("[data-alt]");
const destacado = document.querySelector("[data-destacado]");


productService.leerProducto(id).then((datos) => {
    url.value= datos.imageUrl;
    categoria.value = datos.categoria;
    nombre.value = datos.name;
    precio.value = datos.precio;
    precioSinDescuento.value = datos.precioSinDescuento;
    descripcion.value = datos.description;
    alt.value = datos.alt;
    destacado.value = datos.destacado;
  });
  
  const formulario = document.querySelector("[data-form]");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
  
    productService
      .modificarProducto(
        id,
        nombre.value, 
        url.value, 
        precio.value, 
        precioSinDescuento.value, 
        alt.value, 
        categoria.value, 
        descripcion.value, 
        destacado.value
      )
      .then(() => {
        window.location.href = "../mantenedor-productos.html";
      });
  });