//GET
const listarProductos=()=>
fetch('https://alurageek-jtjtrx7sj-rdianderas-projects.vercel.app/producto')
.then((result)=>result.json())
.catch((error)=>console.log(error));

const leerProducto = (id) => {
    return fetch(`https://alurageek-jtjtrx7sj-rdianderas-projects.vercel.app/producto/${id}`).then((respuesta) => {
      return respuesta.json();
    });
  };

//POST
const creaProdutos = (name, imageUrl, precio, precioSinDescuento, alt, categoria, description, destacado) => {
    return fetch(`https://alurageek-jtjtrx7sj-rdianderas-projects.vercel.app/producto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        imageUrl,
        precio,
        precioSinDescuento,
        alt,
        categoria,
        description,
        destacado,
      }),
    }).then((respuesta) => {
      if (respuesta.ok) {
        return respuesta.body;
      }
      throw new Error("No fué posible crear un producto");
    });
  };
  // PUT/PATCH
const modificarProducto = async (id, name, imageUrl, precio, precioSinDescuento, alt, categoria, description, destacado) => {
    return fetch(`https://alurageek-jtjtrx7sj-rdianderas-projects.vercel.app/producto/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        imageUrl,
        precio,
        precioSinDescuento,
        alt,
        categoria,
        description,
        destacado,
      }),
    })
      .then((respuesta) => {
        return respuesta.json();
      })
      .catch((error) => console.log(error));
  };
  
  // DELETE
  const eliminarProducto = async (id) => {
    return await fetch(`https://alurageek-jtjtrx7sj-rdianderas-projects.vercel.app/producto/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
export const productService={
    leerProducto,
    listarProductos,
    creaProdutos,
    modificarProducto,
    eliminarProducto
};