//crear un vector que contenga la informacion del registro
var lista=[];
//creamos un procedimiento para poder registrar
function Registrar(nomlista,apelista,dnilista,curlista,turlista,estlista){
    var NuevaLista={
        nombre:nomlista,
        apellido:apelista,
        dni:dnilista,
        curso:curlista,
        turno:turlista,
        estado:estlista
    };
    lista.push(NuevaLista);
}

//creamos una funcion para mostrar la información del registro
function Mostrar(){
    return lista;
}