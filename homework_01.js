/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
// Iterative
// Spazio: O(1) 
// Tempo: O(n)
function sumwhileneg(myarray) {
    var tot = 0;
    for(i = 0; i < myarray.length; ++i) {
        var x = myarray[i];
        if (x > 0) {
            tot += x;
        } else {
            return tot;
        }
    }
    return tot;
}


// Ricorsive
// Spazio: O(n) 
// Tempo: O(n)
function sumwhilenegR(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}

// Per Tiziano.
function ex_1_I(myarray) {
    return sumwhileneg(myarray);
}

function ex_1_R(myarray) {
    return sumwhilenegR(myarray);
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
// Spazio: O(1) 
// Tempo: O(n)
function firstOdd(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 * i;
    }
    return tot;
}


// Spazio: O(n) 
// Tempo: O(n)
function firstOddR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + firstOddR(n - 1);
    }
}



// Per Tiziano.
function ex_2_I(x) {
    return firstOdd(x);
}

function ex_2_R(x) {
    return firstOddR(x);
}
console.log('ciao siio');


var values=[5,3,4,8,4];

//Esercizio 3
//Dato un array di 10 elementi, calcolarne la media

function MediaValori(a)
{
 somma =0; media=0;
 for(i=0; i < a.length; i++)
 {
    somma=somma+a[i];     
 }
 media=somma/i;
 return media;
 }
MediaValori(values);
 // ESERCIZIO 3 RICORSIVO 

 function MediaValori2(a)
{
 if(a.length==0)
 {
  return 0;
 }else{
        somma =0; media=0;
        somma=somma+a[0];    
        media=somma/i;
        return media+MediaValori2(a.slice(1));
       }
 
 
 }
 MediaValori2(values);

/*Esercizio 4

Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri

compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,

calcolare la somma nell’intervallo [b,a]

Esempio:

sumInterval(3, 5) => 12

sumInterval(5, 3) => 12*/

function sumlnterval(a,b)
{
 somma=0;
 if(a>b)
 {
  while(b<=a)
  {
   somma=somma+b;
   b++;
  }
  return somma;
 }
 if(b>a)
 {
  while(a<=b)
  {
   somma=somma+a;
   a++;
  }
  return somma;
 }
}

// esercizio 4 ricorsivo

function sumAllR(a,b)
{
  function sumAllInner(a,b)
  {
    if(a==b)
    {
      return b ;
    }
    else{
      return a+ sumAllInner(a+1,b);
    }
  }
  if(a>b)
  return
}

/*Esercizio 5

Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo

operatore somma.

Esempio:

mult(2, 3) => 6*/

function mult(a,b)
{
 prod =0;
 for(i=0; i < b; i++)
 {
     prod=prod+a;     
 }
 return prod;
 }

 // 5 ricorsivo

 function mult2(a,b)
{
 if(a==0 || b==0)
 {
  return 0;
 }else{
 
 return a+mult2(a,b-1);
 }
 }

/*Esercizio 6 iterativo

Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite

l’utilizzo dei soli operatori somma e sottrazione.

Esempio:

div(5, 3) => 1 resto 2*/


function divI(a,b)
{
  // a/b= A-B-B-B-B PER N TIME >0

var divi=0; // quoziente
  while(a>=0)
  {
    a-=b;
    divi++;
  
 }
   var divr=a;
   return [divi,divr];
}

// 6 ricorsivo

function divR(a,b)// a/b = ((a-b)/b)+1  caso base 1+f(a-b,b)
{
  if(a<=b)
  {
    return [0,a];
  }else{
    var res=divR(a-b,b); // divta un array
    return [res[0]+1, res[1]];
  }
}  

// esercizio 7

// ESERCIZIO 8 

function mat(myarray)
{
  var m=[];
  var n= Math.sqrt(myarray.lenght);
  for(var row=0; row<n ;row++)
  {
    for(var col=0; col<myarray.lenght ;col++)
       {
           m(row)=myarray.slice(row*n,(row+1)*n);   
       }
  }
}