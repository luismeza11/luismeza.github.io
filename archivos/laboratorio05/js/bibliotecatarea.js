//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");

//creamos un procedimiento para mostrar
function MostrarLista(){
    //declaramos una viable para guardar los datos
    var listaregistro=Mostrar();
    //selecciono el tbody de la tabla donde voy a mostrar la informacion
    var tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    //agregamos al tbody las filas que se registren
    for(var i=0;i<listaregistro.length;i++){
        //declaramos una variable para las filas
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocur=fila.insertCell(3);
        var titulotur=fila.insertCell(4);
        var tituloest=fila.insertCell(5);
        //agregamos los valores
        titulonom.innerHTML=listaregistro[i].nombre;
        tituloape.innerHTML=listaregistro[i].apellido;
        titulodni.innerHTML=listaregistro[i].dni;
        titulocur.innerHTML=listaregistro[i].curso;
        titulotur.innerHTML=listaregistro[i].turno;
        tituloest.innerHTML=listaregistro[i].estado;
        tbody.appendChild(fila); 
    }
}



//creamos un procedimiento para registrar los datos
function RegistrarLista(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Coloca tu nombre");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Coloca tu apellido");
        txtApe.focus();
    }else if(txtDni.value=="" || txtDni.value==null){
        alert("Coloca tu dni");
        txtDni.focus();
    }else if(cboCurso.selectedIndex==0){
        alert("Selecciona un curso");
        cboCurso.focus();
    }else if(rbM.checked==false && rbT.checked==false && rbN.checked==false){
        alert("Hey escoje un turno");
        rbM.focus();
    }else if(chkEst.checked==false){
        alert("Selecciona el estado");
        chkEst.focus();
    }else{
        //capturando valores
        var nom=txtNom.value;
        var ape=txtApe.value;
        var dni=txtDni.value;
        var cur="";
        var indice=cboCurso.selectedIndex;
        switch(indice){
            case 1:
                cur="Diseño Web";
                break;
            case 2:
                cur="Base de Datos";
                break;
            case 3:
                cur="Programacion Java";
                break;
            default:
                cur="";
                break;
        }
        var turn="";
        if(rbM.checked){
            turn="Mañana";
        }else if(rbT.checked){
            turn="Tarde";
        }else if(rbN.checked){
            turn="Noche";
        }else{
            turn="";
        }
        var est="";
        if(chkEst.checked){
            est="Habilitado";
        }else{
            alert("Selecciona el estado");
            chkEst.focus()
        }
        //llamamos al procedimiento registrar
        Registrar(nom,ape,dni,cur,turn,est);
    }
    //llamamos al preocedimiento a mostrar
    MostrarLista();
}

//llamamos al procedimiento registrar en el evento del boton
btnRegistrar.addEventListener("click",RegistrarLista);
