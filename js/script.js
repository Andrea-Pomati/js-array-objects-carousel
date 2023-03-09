/*Carosello Array di Oggetti
nome repo: js-array-objects-carousel
Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci
 prima sulla creazione del markup statico:
  costruiamo il container
   e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici 
e usiamo l’array di oggetti letterali per popolare
 dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra,
l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello.
Ovvero se la miniatura attiva è la prima e l'utente clicca 
la freccia verso destra,
 la miniatura che deve attivarsi sarà l'ultima e viceversa per 
 l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare 
l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo 
(3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
Buon lavoro e buon divertimento! :occhiali_da_sole:
*/


//array di oggetti da utilizzare
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//collego la variabile all'elemento div html
let wrapper = document.querySelector(".items-container")

// aggiungo immagini e testo:
images.forEach((element) => {
    
    let item = ` <div class="item">
                    <img src="${element.image}">
                    <div class="testo">
                        <div class="titolo">${element.title}</div>
                        <div class="subtitle">${element.text}</div>
                    </div>
              
                </div>`

    wrapper.innerHTML += item;
});



// creo una variabile e ci salvo i div item e associo alla prima immagine la classe active:
let divItem = document.getElementsByClassName("item");
divItem[0].classList.add("active");

// creo la variabile dell'indice:
let activeItem = 0;

// ciclo infinito ai click:
document.getElementById("next").addEventListener("click",
    function(){
        if(activeItem == divItem.length -1){
            activeItem = 0;
        }else{
            activeItem++;
        }

        document.querySelector(".active").classList.remove("active");
        divItem[activeItem].classList.add("active");
    }
);

document.getElementById("prev").addEventListener("click",
    function(){
        if(activeItem == 0){
            activeItem = divItem.length -1;
        }else{
            activeItem--;
        }

        document.querySelector(".active").classList.remove("active");
        divItem[activeItem].classList.add("active");
    }
);

