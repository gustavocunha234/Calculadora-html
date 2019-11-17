function calcular(seleciona)
{
   var valor1 = document.calcform.valor1.value;
   var valor2 = document.calcform.valor2.value;

        if(seleciona == "somar")
        {
        var result = Number(valor1) + Number(valor2).toFixed(1); 
        }
        if(seleciona == "subtrair")
         {
         var result = (valor1 - valor2).toFixed(1);
         }


         if(seleciona == "multiplicar")
         {
            var result = (valor1 * valor2).toFixed(1);
         }
         if(seleciona == "dividir")
         {
         var result = (valor1 / valor2).toFixed(1);
         }

         if(seleciona == "fatorial")
         {
            var result = fatorial (valor1);
         }

         if(seleciona == "fibonacci")
         {
          var result = fibonacci (valor1)
         }

         if(seleciona == "base2")
         {
          var result = base2 (valor1)
         }
         if(seleciona == "base10")
         {
          var result = base10 (valor1)
         }

        document.calcform.result.value = result;

       

}
function limpar()
{
   calcform.valor1.value = "";
   calcform.valor2.value = "";
   calcform.result.value = "";
}

function fatorial(part1)
{
   var fat = 1;
   for(var i=1; i<=part1; i++){
      fat *= i;
   }
   return fat;
}


function fibonacci(val)
{  var numeros=[1,1];
	if(val == 1){
		numeros=1;
	}
	else{
		for(var i=2; i < val; i++)
   {
     numeros[i] = numeros[i-2] + numeros[i-1];
     
   }
	}
   return numeros;
   
}

function base2(valb2){
      var num = +valb2; // var num = parseInt(vab)
      var n = num.toString(2);
      return n;
}
function base10(valb10){

   return Math.log(valb10);

}

