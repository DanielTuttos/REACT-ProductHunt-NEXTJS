export default function validarCrearProducto(valores) {
    let errores = {};
    // validar elnombre delusuario
    if (!valores.nombre) {
        errores.nombre = "El nombre es obligatorio";
    }

    // validar empresa
    if (!valores.empresa) {
        errores.empresa = "Empresa es obligatorio"
    }

    // validar url
    if (!valores.url) {
        errores.url = 'La URL del producto es obligatoria'
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {

        errores.url = "URL no valida"
    }

    // validar descripcion
    if (!valores.descripcion) {
        errores.descripcion = "Agrega una descripcion de tu producto";
    }

    return errores;
}