import {productService } from "../services/product-service.js";
const nuevoProducto=(name,imageUrl,precio,precioSinDescuento,id,alt,categoria,description,destacado)=>{
    const card =document.createElement('div');
    const contenido=`
    <div class="card-producto">
      <div class="contenedor-imagen">
        <img src="${imageUrl}" alt="${alt}" />
        <span class="descuento">-13%</span>
        <div class="grupo-botones">
            <span>
            <a href="editar-producto.html?id=${id}"><i class="fa-regular fa-edit"></i></a>
            </span>
            
        </div>
      </div>
      <div class="contenedor-card-producto">
        <h3>${name}</h3>
        <p class="precio">$${precio} <span>$${precioSinDescuento} </span></p>
      </div>
    </div>
    `;
    card.innerHTML = contenido;
    card.dataset.id = id;
    return card;
};

const productos = document.querySelector("[data-product]");

const render = async () => {
  try {
    const listaProductos = await productService.listarProductos();
    listaProductos.forEach((elemento) => {
      console.log(elemento);
      productos.appendChild(
        nuevoProducto(
          elemento.name,
          elemento.imageUrl,
          elemento.precio,
          elemento.precioSinDescuento,
          elemento.id,
          elemento.alt,
          elemento.categoria,
          elemento.description,
          elemento.destacado
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

render();