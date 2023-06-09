var ecommerce = [{ nombre: "Samsung TV", precio: 6000, articulos:10},
{ nombre: "DELL notbook", precio: 4000, articulos:30 },
{nombre:"Auriculares Sony", precio: 1500, articulos:15},
{nombre:"Monitor Philips", precio:12000, articulos:20},
{nombre:"Teclado logitech", precio: 3000, articulos:5}] 

function totalDeArticulos(ecommerce) {
    const array = new Array();
    let secciones = {};
    for (i = 0; i<ecommerce.length; i++) {
        var seccion = ecommerce[i].nombre;
        secciones [seccion] =+ ecommerce[i].precio*ecommerce[i].articulos
        array.push ({[seccion]: secciones[seccion]});
    }
    console.log (array);
}


totalDeArticulos(ecommerce);