# Ejercicio Cifrado Cesar
### Por Natalia Espinoza Corvalán

###### Se creo una web que pide, por medio de un prompt(), una frase al usuario y que esta devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

 Primero se le pregunta por medio de un prompt() al usuario que desea hacer, si desea cifrar o decifrar, si escribe 1 el programa se va a la función cipher, si escribe 2 a la función de decifrar y si ingresa cualquier caracter distinto a 1 o 2, el programa emitira una ventana de alerta la cual te indica que la respuesta es inválida y por medio de do...while el programa seguira preguntando hasta obtener respuestas válidas. La función cipher por medio de un prompt() pedira al usuario que ingrese una frase, por medio de do...while le decimos que siga ejecutandose hasta obtener como respuesta un 'string', luego se genera una variable de array vacío el cual contendra el resultado y generamos una variable que nos entregara la palabra cifrada. Por medio de un for recorremos los ìndices de la posicion de cada letra del texto entregado por el usuario, utilizamos los métodos charCodeAt() (para obtener el cod. ASCII) y String.fromCharCode() (para pdevolver una cadena). Finalmente le damos valor a la variable strCipher, diciendole que es igual al resultado convertido en string y se abre una ventana de alerta con el texto cifrado...



### Este código contiene:

· Funciones:
  - Función para inicializar mi programaa travez de un prompt.
  - Función para cifrar
  - Función para decifrar

·Métodos:
  - charCodeAt()
  - String.fromCharCode()



### Diagrama de flujo
![Tarjeta de Crédito](https://ibb.co/cSFvyw)

#### Este archivo es la versión `0.0.1`
