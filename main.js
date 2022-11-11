var app = new Vue({
    el: '#slider',
    data: {
        linkImageMe: [`./DSC_5414.jpg`,`./Immagine JPEG 3.jpeg`, 
        `./HardEbook (1).jpg`],
        indice: 0,
    },
    methods: {
        cambiaOggettoRight: function () {
        if( this.indice == 2){
            return this.indice = 0;
        }
        else{
            return this.indice++
        }
    },
        cambiaOggettoLeft: function () {
            if (this.indice == 0) {
                return this.indice = 2;
            }
            else {
                return this.indice--
            }
        }
    }
    })

//realizzare uno slider
   // - ci sono 2 frecce a sinistra e a destra dell'immagine momentanea nello slider 
   //che permettono di andare avanti e indietro tra le immagini
    //array di immagini e di icone ese bottoni + evento al @click 
//BONUS
// - nello slider ci snon dei pallini in basso al click dei vari pallini cambia l'immagine dello slider
//- ogni 3 secondi se non clicco l'immagine va avanti (dentro al created)