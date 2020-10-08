export default function validarCrearProducto(valores) {

    let errores = {};

    // Validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = "El Nombre es obligatorio";
    }

    // validar el empresa
    if(!valores.empresa) {
        errores.empresa = "Empresa es obligatorio";
    }

   //validar url
   if(!valores.url){
       errores.url = 'La URL del producto es obligatoria';
   }else if ( !/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url) ) {
    errores.url = "URL invalida";
   }

    //validar descripcion.
    if(!valores.descripcion) {
        errores.descripcion = "Agregar una descripcion de tu producto";
    }
   

    return errores;
}