
function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}

var a=initialArray();
a.reduce(function(acc, x) {return acc + x;}, 0);

/*Esercizio Ricorsione (15 punti)

Dato l’array A creato dalla funzione initialArray() 
sviluppare un algoritmo ricorsivo non di coda in javascript che 
restituisca il numero di elementi presenti in A che corrispondono al valore 5070.*/


function contavalori(a,valore){
         
  var conta= 0;
  if(a.length==0){
    
    return conta;
    
  } else {
    
    if(a[0] == valore){
                       
     conta++;
     
    }
    
    return  conta + contavalori(a.slice(1),valore);    
    
   }
  
}
console.log(contavalori(a,5070));

/*Esercizio filter/map/reduce (15 punti)

Dato l’array A creato dalla funzione initialArray() 
sviluppare un algoritmo in javascript che restituisca 
la radice quadrata della somma dei quadrati dei soli elementi positivi (>= 0) pari.
Si implementi l’agoritmo utilizzando almeno una volta tutti i seguenti metodi 
dell’oggetto Array: filter, map e reduce.*/

function ex_2(myarray) {
    
    var arrEven = myarray.filter(function(x) {return x % 2 == 0;});
    
    
    
    var positive = arrEven.filter(function(x){return x > 0;});
    
    
    
    var arrSQR = positive.map(function(x) {return x * x;});
    
    
    
    var sumall=arrSQR.reduce(function(acc, x) {return acc + x;}, 0);
    
    
     
    return Math.sqrt(sumall);
    
}

console.log(ex_2(a));

/*
Tree (15 punti)
Si implementi un albero binario di ricerca in javascript e si inseriscano gli elementi 
contenuti nell’array A[0..n-1], ottenuto da initialArray(), nell’ordine dall’indice 0 all’indice n-1.
Si calcoli, mediante l’implementazione di un algoritmo ricorsivo, il valore massimo all’interno dell’albero.
*/

function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;

}

BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
         if (currentNode.l == null)
           currentNode.l = newNode;
         else
           this.addNode(currentNode.l, newNode);
    } else {
         if (currentNode.r == null)
           currentNode.r = newNode;
         else
           this.addNode(currentNode.r, newNode);
    }
}

BST.prototype.add = function(item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}

function tree(array){
        
        var albero= new BST();
        array.forEach(function(x){albero.add(x);});
        
        function trovaMax(tree,massimo){
  
                if(tree==null){
    
                  return massimo;
    
                } else {
       
                   massimo=tree.item; 
                   return trovaMax(tree.r,massimo);
                 }
  
        }
        
        return trovaMax(albero.root,0);
}

console.log(tree(a));


/*Esercizio Stack (25 punti)
Si implementi una funzione in javascript che implementi l’algoritmo che valuta il valore di un’espressione 
“fully parentherized”, ovvero un’espressione in cui ogni singola operazione è all’interno di parentesi. 

Esempio di chiamata:
evaluateExpression(“( ( 2 + 3) * 4 )”).
Si noti che ogni elemento dell’espressione è seguito da uno spazio.

Suggerimento: un possibile algoritmo, qui descritto, richiede l’utilizzo di due stack. 
Algoritmo: Si legga i caratteri che compongono l’espressione da sinistra a destra e si inserisca 
ogni valore numerico incontrato in uno stack V, mentre ogni operatore incontrato (+, -, *, /) o 
ogni parentesi aperta, in uno stack S.

Nel caso si incontri durante la lettura dell’espressione la parentesi chiusa allora:
si rimuova due elementi numerici dallo stack V
si rimuova l’operatore dallo stack e la parentesi aperta dallo stack S
Si esegua l’operazione tra gli elementi numerici (in ordine inverso rispetto a come sono stati estratti) e
 l’operatore estratto.

Si inserisca il risultato dell’operazione nello stack V.

Quando non ci sono più elementi da analizzare nell’espressione, l’elemento rimanente in testa allo stack V 
corrisponde al risultato dell’espressione.

Si calcoli il risultato dell’esecuzione della funzione evaluateExpr che trovate all’interno del file esame_2015.js

La funzione accetta come parametro di input il nome della funzione che avete sviluppato per valutare un’espressione
 “fully parentherized”.
*/

function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(x) {
    this.myarray.push(x);
}
Stack.prototype.pop = function() {
    return this.myarray.pop();
}
Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}
Stack.prototype.isEmpty = function() {
    return this.myarray.length == 0;
}


function ex_3(string) {
    var myarray = string.split(' ');

    var S = new Stack();
    var V = new Stack();

    var op1, op2;

    for (var i = 0; i < myarray.length; i++) {

        if (myarray[i] != ')' && myarray[i] != '(') {

            if (myarray[i] == '+' || myarray[i] == '-' || myarray[i] == '*' || myarray[i] == '/'){

                S.push(myarray[i]);
                
              } else {

                V.push(parseInt(myarray[i]));
              }
        }
        else if (myarray[i] == ')') {

            op1 = V.pop();
            op2 = V.pop();

            switch (S.pop()) {
                case '+':
                    V.push(op1 + op2);
                    break;
                case '-':
                    V.push(op2 - op1);
                    break;
                case '*':
                    V.push(op1 * op2);
                    break;
                case '/':
                    V.push(op2 / op1);
                    break;
            }
        }
    }
    return V.pop();
}

var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}


console.log(evaluateExpr(ex_3));
