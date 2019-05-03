// Rezervacija klasa 
class Rezervacija {
    constructor(ime, telefon, email, datumPrijave, datumOdjave, soba, brKreveta) {
        this.ime = ime;
        this.telefon = telefon;
        this.email = email;
        this.datumPrijave = datumPrijave;
        this.datumOdjave = datumOdjave;
        this.soba = soba;
        this.brKreveta = brKreveta;
    }
}

// KI klas, korisnicki interfejs
class KI {
    static dodajRezervacijuUlistu(rez) {
        const listaKorisnik = document.querySelector('#lista-korisnik');
        const ispisNaslov = document.querySelector('#ispis-naslov');
        const naslov = document.createElement('h3');
        const redKorisnik = document.createElement("div");
        
        redKorisnik.innerHTML = `
        <span> ${rez.ime} </span><br>
        <span> ${rez.telefon} </span><br>
        <span> ${rez.email} </span><br>
        <span> ${rez.datumPrijave} </span><br>
        <span> ${rez.datumOdjave} </span><br>
        <span> ${rez.soba} </span><br>
        <span> ${rez.brKreveta} </span><br>
        </div>`;
        naslov.innerHTML = `Uneli ste sledece podatke za rezervaciju`;

        listaKorisnik.appendChild(redKorisnik);
        ispisNaslov.appendChild(naslov);
    };
};

// Dodavanej nove rezervacije
document.getElementById("btnPrikaziRezervaciju").addEventListener('click', (e) => {

    //Prevent actual submit
    e.preventDefault();

    // hvatanje unetih vrednosti
    const ime = document.getElementById('ime').value;
    const telefon = document.getElementById('telefon').value;
    const email = document.getElementById('email').value;
    const datumPrijave = document.getElementById('datumPrijave').value;
    const datumOdjave = document.getElementById('datumOdjave').value;
    const brKreveta = Number(document.getElementById('brKreveta').value);
    const soba = document.getElementById('izborSoba').value;

    function izabranTekst() {
        var elt = document.getElementById('izborSoba');

        if (elt.selectedIndex == -1)
            return null;

        return elt.options[elt.selectedIndex].text;
    }

    var izabranaSoba = izabranTekst('izborSoba');
    // validacija izbora sobe i broja kreveta
    if (soba == '' || brKreveta == ''){
        prikaziPoruku('Izaberite sobu i broj kreveta');
    }
    else if (brKreveta > soba) {
        sakrijPoruku();
        prikaziPoruku('Broj kreveta ne može biti veći od kapaciteta sobe.')
    }
    else 
    {
        sakrijPoruku();
        // kreiranjene rezervacije 
        const rezervacija = new Rezervacija(ime, telefon, email, datumPrijave, datumOdjave, izabranaSoba, brKreveta);

        //prikaz korisniku
        KI.dodajRezervacijuUlistu(rezervacija);

        //prikaz unetih podatak
        document.querySelector('.modal-soba').style.display = 'none';
        document.querySelector('.ispis-rezervacije').style.display = 'flex';
        // $('.modal-soba').css('display', 'none');
        // $('.ispis-rezervacije').css('display', 'flex');
    }
});

// pozdravna poruka
document.getElementById('btnPotvrdi').addEventListener('click', function () {
    document.querySelector('.porukaHvala').style.display = 'flex';

    document.querySelector('#ispis-naslov').style.display = 'none';
    document.querySelector('#ispis').style.display = 'none';
  
    setTimeout(function () {
        window.location = "./index.html";
    }, 1000);
});

//Event:  otkazi rezervaciju, vracanje na pocetnu stranu 
document.getElementById('btnOtkazi').addEventListener('click', (e) => {
    window.location = "./index.html";
});



