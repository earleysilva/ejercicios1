window.onload=function()
{
/*La gravedad de la Luna es de alrededor del 17% de la
Tierra. escribir un script que calcule su peso efectivo en la
Luna.*/
  function pesLuna(grav,peso)
  {
    return grav*peso;
  }
  console.log("el peso efectivo en la luna es: "+pesLuna(0.17,80));
}
