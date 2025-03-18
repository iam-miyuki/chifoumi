/* Ranger un tableau !
Réalisez la fonction sortNumbers qui permettra de séparer un tableau envoyé en paramètre (ou
argument) en 2 tableaux :
arrayInf, avec les nombre inférieurs à 10
arraySup avec les autres (supérieurs à 10)
Retourner les deux tableaux dans un objet avec pour propriétés inf et sup
Lancer la fonction sortNumber avec un tableau contenant plusieurs valeurs, comme celui-ci :[40, 1,
5, 20, 8, 83, 9]
Afficher dans la console :
l’objet contenant les deux tableaux, puis
le tableau des valeurs inférieures à 10 dans la console, puis
Le tableau des valeurs supérieures à 10*/
// let tablo = [40,1,5,20,8,83,9];
// let arrayInf = [];
// let arraySup = [];
// let myObject = {inf:arrayInf,sup:arraySup};
// function sortNumber() {
//     for (let i=0;i<tablo.length;i++){
//         if(tablo[i]<10){ 
//             arrayInf.push(tablo[i])
//         } else {
//             arraySup.push(tablo[i])
//         }
//     }
//     return myObject;
// }
// console.log(sortNumber(tablo));
/*/**
 * Fonction qui trie un tableau de nombre de 0 à 99 en deux tableaux :
 * - un tableau avec les nombres inférieurs à 10
 * - un tableau avec les nombres supérieurs ou égaux à 10
 * 
 * @param {Array<number>} arrayNumbers - Le tableau de nombres à trier allant de 0 à 99
 * @returns {Object} - Un objet contenant deux propriétés :
 * - inf: un tableau avec les nombres inférieurs à 10
 * - sup: un tableau avec les nombres supérieurs ou égaux à 10
 *
 * @example
 * sortNumbers([1, 2, 3, 10, 11, 12])
 * // {
 * //   inf: [1, 2, 3],
 * //   sup: [10, 11, 12]
 * // 
 /*
function sortNumbers(arrayNumbers) {
    let aInf = [];
    let aSup = [];

    for(let i = 0; i < arrayNumbers.length ; i++ ) {
        // Pour avoir chaque element :
        // console.log(arrayNumbers[i]);
        if (arrayNumbers[i] < 10) {
            aInf.push(arrayNumbers[i]);
        } else {
            aSup.push(arrayNumbers[i])
        }
    }

    return {
        inf: aInf.sort(),
        sup: aSup.sort()
    }

}

let result = sortNumbers([1, 2, 3, 10, 11, 12, 99, 7, 34]);
console.log(result);
console.log(result.inf);
console.log(result.sup);*/

/*4. Chifoumi
Principe
L'utilisateur va saisir le mot pierre, feuille ou ciseau (à l'aide de la fonction prompt , toujours).
L'ordinateur choisi aléatoirement l'une des 3 possibilités et il faut déterminer qui a gagné et l'afficher à
l'utilisateur ( alert() ou console.log() , comme vous préférez).
Si le joueur et l'ordinateur font le même choix on obtient une égalité.
Le ciseau est écrasé par la pierre (la pierre gagne, le ciseau perd).
La feuille est découpée par le ciseau (le ciseau gagne, la feuille perd).
La pierre est enveloppée par la feuille (la feuille gagne, la pierre perd).
Astuces
Pour récupérer un nombre aléatoire, utiliser des méthodes de l'objet Math
Il faut vérifier la saisie de l'utilisateur. Il peut également entrer les mots avec des majuscules (et il doit
pouvoir le faire sans avoir d'erreur). (il existe une fonction en JS pour mettre un texte en minuscule)*/

// function getRandomInt(max = 2) {
//   return Math.round(Math.random() * max);
// }

// function playChifoumi() {
//   let myChifoumi = getRandomInt();
//   let userChifoumi = prompt("On joue à chifoumi?");
//   // getRandomInt 0 = pierre, 1 = ciseau, 2 = papier
//   if (userChifoumi.toLowerCase() === "pierre") {
//     if (myChifoumi == 0) {
//       alert("égalité");
//     } else if (myChifoumi == 1) {
//       alert("tu as gagné");
//     } else {
//       alert("tu as perdu");
//     }
//   } else if (userChifoumi.toLowerCase() === "ciseau") {
//     if (myChifoumi == 0) {
//       alert("tu as perdi");
//     } else if (myChifoumi == 1) {
//       alert("égalité");
//     } else {
//       alert("tu as gagné");
//     }
//   } else if (userChifoumi.toLowerCase() === "papier") {
//     if (myChifoumi == 0) {
//       alert("tu as gagné");
//     } else if (myChifoumi == 1) {
//       alert("tu as perdu");
//     } else {
//       alert("égalité");
//     }
//   }
// }
// playChifoumi();

/*6. Gestionnaire de bibliothèque*/
/*1. Ajouter un livre : Vous devrez créer une fonction addBook(title, author, pages,
isRead) qui prend en paramètres le titre, l'auteur, le nombre de pages et le statut de lecture
du livre, crée un nouvel objet livre avec ces informations, et ajoute cet objet à la bibliothèque*/
let books = [{title : "Harry Potter",author : "J.K.Rowing",pages : 300,isRead : true}];
function addBook(newTitle,newAuthor,newPages,newIsRead){
  let tempoBook = {
    title:newTitle,
    author:newAuthor,
    pages:newPages,
    isRead:newIsRead
  }
  books.push(tempoBook)
  return books
}
addBook("Da vinci code","Jjj",233,false);
console.log(books);
/*2. Demander à l'utilisateur d'ajouter un livre : Vous devez créer une fonction
setNewBook() qui demandera à l'utilisateur via quatre prompts consécutifs les différentes
données du nouveau livre (le titre, l'auteur, le nombre de pages et le statut : lu ou non). Une
fois les demandes effectuées, elle enregistrera le livre dans la bibliothèque books grâce a la
fonction addBook(title, author, pages, isRead) précédemment déclarée*/
let addTitle = prompt("Title?");
let addAuthor = prompt("Autheur?");
let addPages = prompt("Nombre de pages?");
let addIsRead = prompt("Tu l'as lu?");

