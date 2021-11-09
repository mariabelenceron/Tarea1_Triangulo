//-------Variables
const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');

//-------Eventos
formulario.addEventListener('submit', inicioPrograma);

//-------Funciones
function inicioPrograma(e) {
    e.preventDefault();

    const lado1 = document.querySelector('#lado1').value;
    const lado2 = document.querySelector('#lado2').value;
    const lado3 = document.querySelector('#lado3').value;
    
    const comprobarNumeros = /^\+?(0|[1-9]\d*)$/

    if(comprobarNumeros.test(lado1) && comprobarNumeros.test(lado2) && comprobarNumeros.test(lado3)){
        if(esTriangulo(Number(lado1),Number(lado2),Number(lado3))){
            tipoDeTriangulo(Number(lado1),Number(lado2),Number(lado3));
        }else{
            respuesta.textContent = 'No se puede realizar un triangulo con las longitudes ingresadas, intente con otras';
            resetearFormulario();
        }
    }else{
        respuesta.textContent = 'Solo se admiten números enteros';
        resetearFormulario();
    }
}

//Funcion para validar si es un triangulo o no
function esTriangulo(a,b,c) {
    if((a+b>=c && b+c>=a && c+a>=b) && (a>0 && b>0 && c>0)){
        return true;
    }else{
        return false;
    }
}

//Funcion para saber el tipo de triangulo que es
function tipoDeTriangulo(a,b,c) {
    if(a==b && b==c){
        respuesta.textContent = 'Triangulo Equilatero';
    } else if(a==b || b==c || a==c){
        respuesta.textContent = 'Triangulo Isósceles';
    } else {
        respuesta.textContent = 'Triangulo Escaleno';
    }
}

//Resetea el formulario
function resetearFormulario(){
    formulario.reset();
}
