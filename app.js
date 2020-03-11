const nomSerie = document.querySelector('#input-nom');
const scoreNote = document.querySelector('#select_number');
const boutonConfirmer = document.querySelector('#btn-add');
const noteSerie = document.querySelector('#note_serie');

const alertCtrl = document.querySelector('ion-alert-controller');



boutonConfirmer.addEventListener('click', () => {
   const nomRecup = nomSerie.value;
   const scoreRecup = select_number.value;

   if(
       nomRecup.trim().length <= 0
       ){
    alertCtrl.create({
        header: 'Erreur',
        message:'Veuillez entrer une série ou une note correcte',
        buttons: ["OK"]
    }).then(alertElement => 
        alertElement.present());
         return;
    }
    
   const newItem = document.createElement('ion-item');
    newItem.innerHTML = `<ion-avatar slot="start"><img src= "image/score.jpg"></ion-avatar>
    <ion-label><h3>${nomRecup}</h3>
    <p>note : ${scoreRecup}/5</p>
    </ion-label><`;

    noteSerie.appendChild(newItem);

    nomSerie.value = '';

});
   