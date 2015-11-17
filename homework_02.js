/*Esercizio 1
*Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/

var a=[2,3,4,5,5,-5,3,2,2];
function ex_es1_F(x)
{
var somma=0;
a.every(function(x) 
                    { 
                      if (x>=0)
                      {
                          somma=somma+x;
                      }
                       return x>0;
                     });
                     return somma;
}
console.log(ex_es1_F(a));