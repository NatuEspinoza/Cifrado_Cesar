//Preguntar al usuario si quiere cifrar(1) o desifrar(2)
function caesar(){
	do{
		var answer = prompt("Indique el número de lo que desea hacer: 1)cifrar - 2)decifrar");
		if(answer != ""){//si la respuesta es distinto de campo vacío
			if(answer == "1") {
				cipher(); //envía al usuario a la función cipher
			} else if (answer == "2") {
				decipher(); // Envía al usuario a la función decipher
			} else {
				alert("Ingrese una opción válida");
			}
		}
		//le decimos al programa que pregunte hasta obtener una respuesta válida
	} while (answer == "" || (answer != "1" && answer != "2"));
}

//Funcion para cifrar
function cipher(text){
  do{
		// pedimos al usuario que ingrese una frase
    text = prompt("Ingrese una frase");
		//el programa seguirá preguntando hasta obtener un string como respuesta
  }while (typeof text !== 'string');
		//generamos una variable de array vacío para poner nuestro resultado
    var result = [];
		//declaramos una variable que nos entregara la palabra cifrada
    var strCipher;
		//generamos un for para recorrer los indices del texto entregado por el usuario
    for (var i = 0; i < text.length; i++) {
			//Al array vacío result le agregamos los indices y los pasamos de number a string
      result.push(String.fromCharCode(((text.charCodeAt(i)-
      text.charCodeAt(i)+33) % 26 + text.charCodeAt(i))));
    }
		//le damos valor a strCipher, diciendole que es igual al resultado convertido en string
    strCipher = result.join('');
    alert(strCipher);


  }


//Funcion para desifrar
function decipher(text){
	text = prompt("Ingrese una frase");

}

caesar();
