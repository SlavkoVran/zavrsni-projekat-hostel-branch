# NAZIV PROJEKTA:
## zavrsni-projekat-hostel-branch
30.Slobodna tema*(web sajt, responsive dizajn)

# OPIS
Mobile first responsive web stranica hostela "Branch" sa mogućnošču rezervacije kreveta. Isti prikaz Google Chrome i Mozilla Firefox

# KORIŠĆENE TEHNOLOGIJE:
* HTML
* CSS 
* JavaScript
* JQuery
* GIMP

* Bootstrap
* Font Awesome
* Animate.css
* Firebase
* Jquery UI


# STRUKTURA SAJTA: 
* pet HTML stranica svaka stranica sadrži navigacioni meni i footer.
* folder css (sest CSS fajlova)
* folder js (cetiri JavaScript fajla)
* folder img gde su smeštene korišćene fotografije 
* folder vid gde je smešten korišćeni video

### 1. POČETNA 
Na ovoj stranici se nalazi pozadinski video koji je fiksiran, dugme koje je linkovano do stranice za rezervaciju.
#### HTML 
* index.html
#### CSS
* style.css - stilizovanje responzivne navigacije i footera
* home.css - stilizovanje početne stranice

### 2. O NAMA
Prrilagodljiv prikaz teksta i slika. Hover efekat na slikama. 
#### HTML 
* onama.html
#### CSS
* style.css - stilizovanje responzivne navigacije i footera
* onama.css - stilizovanje 

### 3. REZERVACIJA
* UNESITE VASE LICNE PODATKE - Poruke o uslovima za unos podataka se menjaju dok korisnik unosi podatke, nakon uspesne validacije omoguceno je kliknuti na dugme za dalje popunjavanje podataka
* IZABERITE DATUM - JQuery datapicker za odabir datuma, nakon ispunjenosti svih uslova moguće je preći na sledeći korak rezervacije
* IZABERI SOBU I KREVET - nakon validno unetih podataka moguće je prikazati unete podatke za rezervaciju
* PRIKAZ UNETIH PODATAKA - prikazuju se uneti podatci korisnik ima mogućnost da odustane od rezervacije ili da je potvrdi ukoliko je potvrdi izlazi poruka koja nakon 1s nestaje i otvara se početa stranica. Podatke o rezervaciji potrebno je smestiti u bazu to je sledeći korak u razvoju stranice. 
#### HTML 
* rezervacija.html
#### CSS
* style.css - stilizovanje responzivne navigacije i footera
* rezervacija.css - stilizovanje stranice, forme za rezervisanje

#### JavaScript
* rezervacija.js - kreirana klasa rezervacija, klasa za prikaz sadržaja korisnicima. Nakon uspešne validacije
podaci se prikazuju korisniku. 
* rezervacija-validacija.js - tri koraka validacije, dugmići za kretanje kroz formu rezervacije. 

### 4.GALERIJA
Stranica na kojoj se prikazuje odabrana fotografija iz albuma.
#### HTML 
* galerija.html
#### CSS
* style.css - stilizovanje responzivne navigacije i footera
* galerija.css - stilizovanje galerije na mobilnim uredjajima slike su prikazane u tri kolone a na desktop u četiri.

#### JavaScript
* galerija.js - Na događaj klikom miša na odredjenu fotografiju izvršava se funkcija koja menja prikaz slike u velikom formatu

### 5.KONTAKT
Stranica na kojoj je se nalazi google mapa i  kontakt forma. 

#### HTML 
* kontakt.html
#### CSS
* style.css - stilizovanje responzivne navigacije i footera
* kontak.css - prilagodljiv dizajin.

#### JavaScript
* kontak.js - validnim popunjavanjem forme podaci se šalju u bazu. Za ovo je korišćena 
google firebase platforma. 

 

