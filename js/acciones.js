// JavaScript Document


$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
var db=OpenDataBase("Test","1.0","Test",65535);


	
$('#Crear').bind("click",function(event){
	db.transaction(function(ejecutar) {
	var SQL="CREATE TABLE Clientes(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(64) NOT NULL, apellido VARCHAR(100))"			

ejecutar.executeSQL(SQL,undefined, function() {				

alert("Tabla Creada");

   }, error); 
   });//ejecutar 
   });//click crear		
   
$('#Eliminar').bind("click",function(event){
	if(!confirm("Borrar Tabla ",""))return;;
	db.transaction(function(ejecutar) {
	var SQL="DROP TABLE Clientes";
	ejecutar.executeSQL(SQL,undefined, function() {				
    alert("Tabla Borrada");

   }, error); 
   });//ejecutar 
   });//click eliminar 

function error (ejecutar, err) 
{
  alert ("Error de Base de Datos : " + err.message);
  return false;
}    

},false);//ready device


	
	
});//document

