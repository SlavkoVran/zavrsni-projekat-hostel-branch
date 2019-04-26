
// Navigacija kroz formu dugmići
$('#btnDaljeKorisnik').on('click', function () {
    $('.modal-korisnik').hide();
    $('.modal-datum').show();
});

$('#btnNazadDatum').on('click', function () {
    $('.modal-datum').hide();
    $('.modal-korisnik').show();
});

$('#btnNazadRezervacija').on('click', function () {
    $('.modal-soba').hide();
    $('.modal-datum').show();
});

$('#btnPrikaziRezervaciju').on('click', function () {
    $('.modal-soba').hide();
    $('.ispis-rezervacije').show();
});

$('#btnNazadPrikaz').on('click', function () {
    $('.ispis-rezervacije').hide();
    $('.modal-soba').show();
    console.log("radi");

});

//Fracanje na pocetnu stranu

$('#btnDaljeDatum').on('click', function () {

    var datumPrijave = $('#datumPrijave').val();

    if (datumPrijave != 0) {
        $('.poruka-datum').hide();
        $('.modal-datum').css('display', 'none');
        $('.modal-soba').show();
    }
    else {
        $('.poruka-datum').text('Niste uneli validan datum').show();

    }
});


// Rezervacija klasa 
class Rezervacija {
    constructor(ime, telefon, email, datumPrijave, datumOdjave) {
        this.ime = ime;
        this.telefon = telefon;
        this.email = email;
        this.datumPrijave = datumPrijave;
        this.datumOdjave = datumOdjave;
        // this.brKreveta = brKreveta;
    }
}

// KI klas, korisnicki interfejs

class KI {
    // static prikaziRezervaciju() {

    //     const SnimljeneRezervacije = [
    //         {
    //             ime: 'Slavko Vranesevic',
    //             telefon: '066000699',
    //             email: 'primer@primer.com',
    //             datumPrijave: '07.05.2019',
    //             datumOdjave: '15.05.2019',
    //             brKreveta: '2'
    //         }, 

    //         {
    //             ime: 'Pera Peric',
    //             telefon: '0000000',
    //             email: 'primer@primer.com',
    //             datumPrijave: '07.05.2019',
    //             datumOdjave: '15.05.2019',
    //             brKreveta: '4'
    //         }
    //     ];


    //     const rezervacije = SnimljeneRezervacije;

    //     rezervacije.forEach((rez) => KI.dodajRezervacijuUlistu(rez));
    // }

    static dodajRezervacijuUlistu(rez) {
        const lista = document.querySelector('#rezervacija-lista');

        const red = document.createElement('tr');

        red.innerHTML = `
        <td>${rez.ime}</td>
        <td>${rez.telefon}</td>
        <td>${rez.email}</td>
        <td>${rez.datumPrijave}</td>
        <td>${rez.datumOdjave}</td>
        `;

        lista.appendChild(red);
    };


};

// local storage

// Dogadjaji: Prikazi rezervaciju

document.addEventListener('DOMContentLoaded', KI.prikaziRezervaciju);


// Dodavanej nove rezervacije

document.getElementById("btnPrikaziRezervaciju").addEventListener('click', (e) =>{

    //Prevent actual submit
    e.preventDefault();


    // hvatanje unetih vrednosti
    const ime = document.getElementById('ime').value;
    const telefon = document.getElementById('telefon').value;
    const email = document.getElementById('email').value;
    const datumPrijave = document.getElementById('datumPrijave').value;
    const datumOdjave = document.getElementById('datumOdjave').value;
    // const brKreveta = document.getElementById('brKreveta').value;
    

   // kreiranjene rezervacije 
   const rezervacija = new Rezervacija (ime, telefon, email, datumPrijave, datumOdjave);
   

   //prikaz korisniku
   KI.dodajRezervacijuUlistu(rezervacija);

}); 

//Event:  otkazi rezervaciju
document.getElementById('btnOtkazi').addEventListener('click',(e) =>{
window.location = "./index.html";
});

// document.getElementById('btnOtkazi').addEventListener('click', location.reload());






// class Soba{
//     constructor(nazivSoba, brKreveta){ 
//     this.nazivSoba = nazivSoba;
//     this.brKreveta = brKreveta;
//     }

//     izborSoba (){

//         let nizBrojKreveta = new Array();
//         // let nizSoba = new Array();;
//         var rezBrojKrevetaA = document.getElementById('brojKrevetaA').value;
//         var rezBrojKrevetaB = document.getElementById('brojKrevetaB').value;
//         var rezBrojKrevetaC = document.getElementById('brojKrevetaC').value;
//         var rezBrojKrevetaD = document.getElementById('brojKrevetaD').value;



//         this.brKreveta = nizBrojKreveta.push(rezBrojKrevetaA, rezBrojKrevetaB, rezBrojKrevetaC, rezBrojKrevetaD);

//         }

// }


// class Rezervacija extends Soba{
//     constructor (nazivSoba, brKreveta, datumPrijave, datumOdjave){
//         super(nazivSoba, brKreveta)
//     this.datumPrijave = datumPrijave;
//     this.datumOdjave = datumOdjave;
//     }


// }

// class Kupac {
//     constructor(ime, telefon, email){
//     this.ime = ime;
//     this.telefon = telefon;
//     this.email = email;
//     }



// }

// /
// let sobaA = ' Soba "A" ';
// let sobaB = ' Soba "B" ';
// let sobaC = ' Soba "C" ';
// let sobaD = ' Soba "D" ';

// soba1 = new Soba ("SobaA", 2);
// console.log(soba1);

// kupac1 = new Kupac ("Pera Peric", 064/3682548, "slavko@gmail.com");

// rezervacija1 = new Rezervacija ("SobaA", 2, 12.03, 13.03, kupac1);
// console.log(rezervacija1);

