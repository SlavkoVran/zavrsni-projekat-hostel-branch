var config = {
    apiKey: "AIzaSyB5heZOiOPRBOU1_JAkV6g13uCNof66x7M",
    authDomain: "kontakt-forma-834bb.firebaseapp.com",
    databaseURL: "https://kontakt-forma-834bb.firebaseio.com",
    projectId: "kontakt-forma-834bb",
    storageBucket: "kontakt-forma-834bb.appspot.com",
    messagingSenderId: "815731210255"
  };
  firebase.initializeApp(config);

// poruke
var porukaRef = firebase.database().ref('poruka');

// za pozivanje snimanja forme
document.getElementById('kontaktForm').addEventListener('submit',
 posaljiForm);

// Snimanje forme
 function posaljiForm(e){
     e.preventDefault();

     var ime = snimiVrednost('kIme');
     var telefon = snimiVrednost('kTelefon');
     var email = snimiVrednost('kEmail');
     var nazivKompanije = snimiVrednost('kNazivKompanije');
     var poruka = snimiVrednost('kPoruka');

     // snimanje poruke
     snimiPoruku(ime, telefon, email, nazivKompanije, poruka);

     // Prikaz poruke za korisnika

     document.querySelector('.porukaKorisnik').style.display = 'block';

     // skrivanje poruke nakon odredjenog vremena
     setTimeout(function(){
         document.querySelector('.porukaKorisnik').style.display = 'none';
     },3000);

     // brisanje iz input polja
     document.getElementById('kontaktForm').reset();
 }

 // Funkcija za uzimanje vrednosti 
 function snimiVrednost(id){
     return document.getElementById(id).value;
 }

 // Snimi poruku firebase
 function snimiPoruku (ime, nazivKompanije, email, telefon, poruka){
     var novaPorukaRef = porukaRef.push();
     novaPorukaRef.set({
        ime: ime, 
        telefon: telefon,  
        email: email, 
        nazivKompanije: nazivKompanije, 
        poruka: poruka
     });

 }