window.onload=function()
{

/*Realizar un script que dada una unidad realice la
conversión de: Grados centígrados a Grados Fahrenheit,
de Grados centígrados a Grados Kelvin y viceversa.*/

  //convertir centigrados a farenheit

  var graCent=1;
  var fahren=(9/5);
  var escFahr=32;
  res=graCent*fahren+escFahr;
  console.log(graCent+" grados centigrados equivalen a: "+res + " farenheit");

  //convertir farenheit a centigrados

  var graFar=1;
  var cenRen=5/9;
  res1=graFar-escFahr;
  console.log(graFar+" grados farenheit equivalen a: "+res1*cenRen+ "  centigrados");

  //convertir centigrados a kelvin

  var graKelvin=273.15;
  res3=graCent+graKelvin;
  console.log(graCent+" grados centigrados equivale a: "+res3+" kelvin");

  //convertir kelvin a centigrados
  var kelvGra=1;
  res4=kelvGra - graKelvin;
  console.log(graCent+" grados centigrados equivale a: "+res4+" centigrados");

}
