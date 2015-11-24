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

/*Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari.*/


function createArray(n)
{
                    var array=[];
                    for(var i=0; i<n; i++)
                    {
                                        array.push(i);
                    }
                    return array;
}
function firstOddF(n)
{
    createArray(2*n).filter(x => x%2 !=0).reduce((acc,x)=> acc+x,0);
}

// esercizio 3 funzionale
function myforEach(myarray,c)
{
                    for(var i=0; i<myarray.length; i++)
                    {
                                        c(myarray[i]);
                    }
}

function averageF(myarray)
{
                 
                    var tot=0;
                    myarray.forEach(x => {tot =tot+x});     // =>{} == function x{}
                    return tot/myarray.lenght;
}

function averageF2(myarray)
{
                    return myarray.reduce((acc,x) => acc+x,0) / myarray.lenght;
}

/*Esercizio 4

Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri

compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,

calcolare la somma nell’intervallo [b,a]

Esempio:

sumInterval(3, 5) => 12

sumInterval(5, 3) => 12*/

function createArrayFromTo(n)
{
                    var array=[];
                    for(var i=a; i<b; ++i)
                    {
                                        array.push(i);
                    }
                    return array;
}

function sumAllF(a,b)
{
                    if(a>b)
                    {
                                        var t=a;
                                        a=b;
                                        b=t;
                    }
                    return createArrayFromTo(a,b).reduce((acc,x)=> acc+x,0);
}

// esercizio 5 funzionale

function moltF(a,b)
{
                    return createArray(b).reduce((acc,x)=> acc+a,0);
}

/*Esercizio 6

Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite

l’utilizzo dei soli operatori somma e sottrazione.

Esempio:

div(5, 3) => 1 resto 2*/

function divF(a,b)
{
                    //
}