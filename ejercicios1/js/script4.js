window.onload=function()
{

  //Calculadora Fraccionarios

  //Ingrese valor fraccion a
  var anum=100;
  var aden=350;
  //Ingrese valor fraccio1n b
  var bnum=80;
  var bden=150;

  //Operacion a realizar
  var expression="division";


  var res=0;
  switch (expression)
  {
    case "suma":
      res=[anum*bden+bnum*aden, den=aden*bden];
    break;

    case "resta":
      res=[anum*bden-bnum*aden, den=aden*bden];
    break;

    case "multiplicacion":
      res=[num=anum*bnum,den=aden*bden];
    break;

    case "division":
      res=[num=anum*bden,den=aden*bnum];
    break;
  }

  //Simplicar fraccionarios, utilizando el máximo común divisor...
  //Esta parte es tomada del ejercicio realizado en clase

  var numerador = Number(res[0]);
  var denominador = Number(res[1]);
  var maximoComunDivisor = function(a, b)
  {
    return b ? maximoComunDivisor(b, a%b) : a;
  };
  maximoComunDivisor = maximoComunDivisor(numerador,denominador);
  numerador /= maximoComunDivisor;
  denominador /= maximoComunDivisor;
  var respuesta = numerador + "/" + denominador;
  if(denominador === 1)
  {
    respuesta = numerador;
  }

  console.log(respuesta);

}
