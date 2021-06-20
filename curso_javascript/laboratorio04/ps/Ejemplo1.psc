Algoritmo Ejemplo1
	//definiendo variables
	definir edad como entero;
	definir men como texto;
	//inicializando las variables
	edad=0; men="";
	//capturamos valores
	escribir "Ingresa tu edad:";
	leer edad;
	//condicion
	si (edad>=18)Entonces
		men="Eres mayor de edad";
	Sino
		men="Eres menor de edad";
	FinSi
	//mostrando resultados
	escribir "La edad es: ",edad;
	escribir men;
FinAlgoritmo
