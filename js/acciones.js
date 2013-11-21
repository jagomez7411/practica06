// JavaScript Document


$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
var db=openDatabase("Test","1.0","Test",65535);


	
$('#Crear').bind("click",function(event){

	db.transaction(function(ejecutar) {
	var SQL="CREATE TABLE Clientes(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(64) NOT NULL, apellido VARCHAR(100))"			

ejecutar.executeSql(SQL,undefined, function() {				

alert("Tabla Creada");

   }, error); 
   });//ejecutar 
   });//click crear		
   
$('#Eliminar').bind("click",function(event){

	if(!confirm("Borrar Tabla?? ",""))return;
	db.transaction(function(ejecutar) {
	var SQL="DROP TABLE Clientes";
	ejecutar.executeSql(SQL,undefined, function() {				
    alert("Tabla Borrada");

   }, error); 
   });//ejecutar 
   });//click eliminar 

$("#Insertar").bind ("click", function (event)
{
  var v_nombre = $("#nombre").val ();
  var v_apellido = $("#apellido").val ();
  
  db.transaction (function (ejecutar) 
  {
    var sql = "INSERT INTO clientes (nombre, apellido) VALUES (?, ?)";
    ejecutar.executeSql (sql, [v_nombre, v_apellido], function ()
    { 
      alert ("Cliente Agregado");
    }, error);
  });
});

function error (ejecutar, err) 
{
  alert ("Error de Base de Datos : " + err.message);
  return false;
}    

},false);//ready device


	
	
});//document

