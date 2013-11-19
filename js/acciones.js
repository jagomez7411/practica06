// JavaScript Document


$(document).ready(function(e){
var db=OpenDataBase("Test","1.0","Test",65535);
	document.addEventListener("deviceready",function(){
$('#Crear').bind("Click",function(event){
	db.transaction(function(ejecutar) {
	var SQL="CREATE TABLE Clientes(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(64) NOT NULL, apellido VARCHAR(100))"			

ejecutar.executeSQL(SQL,undefined, function() {				

navigator.notification.alert("Tabla Creada");

   }, error); 
   });//ejecutar 
   });//click crear		
   
$('#Eliminar').bind("Click",function(event){
	if(!navigator.notification.confirm("Borrar Tabla ",""))
	return;
	db.transaction(function(ejecutar) {
	var SQL="DROP TABLE Clientes";
	ejecutar.executeSQL(SQL,undefined, function() {				
    navigator.notification.alert("Tabla Borrada");

   }, error); 
   });//ejecutar 
   });//click eliminar 

},false);//ready device
	
	
});//document

