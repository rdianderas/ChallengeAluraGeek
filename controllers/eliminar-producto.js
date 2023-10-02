import {productService } from "../services/product-service.js";
function eliminarProducto(id)
{
    if (confirm("Esta seguro que desea eliminar el producto!") == true) {
        productService
        .eliminarProducto(
          id
        )
        .then(() => {
          window.location.href = "../mantenedor-productos.html";
        });
    }
   
}