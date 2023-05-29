/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let typeString ='Ciao sono Paolo'
console.log('Questa è una stringa:',typeString)
let typeNumber = 10
console.log('Qesto è un numero:',typeNumber)
let typeBoolean = true
console.log('Questo è un valore booleano:',typeBoolean)
let typeNull = null
console.log('Questo è un valore nullo:',typeNull)
let typeUndefined
console.log('Questo è un valore non definito:',typeUndefined)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Paolo'
console.log('Il mio nome è'+ ' ' + myName)

// se la mia variabile myName la imposto come una costante quindi const myName = 'Paolo' 
// l'esercizio numero 5 mostrerà l'impossibilità di riassegnare il valore della variabile

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12
let number2 = 20
let result = number1+number2
console.log('Il risultato è:',result)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let variableX = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Manca' 
/* in questo caso posso riassegnare il valore.
ma se nell'esercizio 1 avessi usato const al possto di let la console mi darebbe l'errore richiesto */
console.log('Il nuovo valore è:', myName)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let number4 = 4
let number5 = number4 - variableX
console.log('Il risultato è un numero negativo:', number5)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
// in questo caso le 2 variabili sono differenti in quanto name2 inizia con un carattere maiuscolo
console.log('In questo caso è:', name1 === name2) 

// in questo caso name2 viene trasformato tutto in minuscolo quindi l'uguaglianza viene verificata
/* dato che name1 risulta già in minuscolo possiamo evitare di trasformarlo,
altrimenti se vogliamo essere sicuri scriviamo name1.toLowerCase */
console.log('Extra -> In questo caso è:', name1 === name2.toLowerCase())
