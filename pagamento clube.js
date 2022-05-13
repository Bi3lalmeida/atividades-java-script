
function pagamento(){
var numero= document.getElementById("pagamentoid").value; 
console.log(numero)

	     switch (numero){
	     	case "0":
	     	 console.log("Pagamento em Janeiro");
	     	break;
	     	case "1":
	     	 console.log("Pagamento em Fevereiro");
	     	break;
	     	case "2":
	     	 console.log("Pagamento em Março");
	     	break;
	     	case "3":
	     	 console.log("Pagamento em Abril");
	        break;
	     	default:
	     	 console.log("Pagamento em Maio");
	     	break;
	     }

}