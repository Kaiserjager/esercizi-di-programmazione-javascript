/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

var cats = 44;
var line = 6;

var lines_n = Math.ceil(cats/line);

var lines_nxline = line*lines_n;    // numero di file per numero di gatti in fila //

var cats_lacking = lines_nxline-cats;

console.log("cats number:"+cats);
console.log("cats in a line:"+line);
console.log("number of lines:"+lines_n);
console.log("cats lacking:"+cats_lacking);
