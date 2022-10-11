function calcular() 
{
     let nombre = document.getElementById("nombre").value;
     let diaNacimiento = document.getElementById("dia").value;
     let mesNacimiento = document.getElementById("mes").value;
     let anioNacimiento = document.getElementById("anio").value;
     let salida = document.getElementById("salida");
  
     
function calcularEdad(nombre, diaNacimiento, mesNacimiento, anioNacimiento) {
        this.nombre = nombre;
        this.dia= diaNacimiento;
        this.mes= mesNacimiento;
        this.year=anioNacimiento;
    
        this.edad= function (){
            let edad= 0; 
            let fecha= new Date();
            let dia= fecha.getDate();
            let AcFecha= fecha.getFullYear();
            let AcMes= fecha.getMonth()+1;
            if (AcMes < this.mes|| AcMes=== this.mes&&dia<this.dia){
                return edad = (AcFecha-this.year)-1;
            } else {
                return edad = AcFecha-this.year;
            }
          return edad;
        };
   
}
    let total = new calcularEdad(nombre, diaNacimiento, mesNacimiento, anioNacimiento);
    salida.innerHTML="La edad actual de "+ total.nombre +" es "+total.edad()+".";
}


function limpiar() {
  nombre=document.getElementById("nombre").value=" ";
  dia=document.getElementById("dia").value=" ";
  mes=document.getElementById("mes").value=" ";
  year=document.getElementById("anio").value=" ";
  salida.innerHTML="";
}
