function dec2bin(n)
{
    numerobinario=new Stack();
    var resto=0;
    var numero=n;
    var cifra='';
    while(numero>0)
    {
     resto=numero%2;
     numero=Math.floor(numero/2);
     numerobinario.push(resto);
     }
    while(numerobinario.isEmpty()==false)
    {
     cifra=cifra+numerobinario.pop().toString();
     }
    return console.log(cifra);
 }