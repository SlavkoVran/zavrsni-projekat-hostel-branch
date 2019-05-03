
var formValidacija = {
    ime: false,
    email: false,
    telefon: false
};

// funkcija koja uklanja attr disabled ukoliko su uneti podatci validni
function otkljucajDugmeNastavi() {
    if(formValidacija.ime && formValidacija.email && formValidacija.telefon)
      {
        $('#btnDaljeKorisnik').removeAttr('disabled');
    }
    else {
        $('#btnDaljeKorisnik').attr('disabled', true);
    }
};

//funkcija za prikaz poruke ukoliko nisu uneti validni podaci
function prikaziPoruku(sadrzaj) {
    $('.poruka').text(sadrzaj).show();
};

//funkcija uklanja poruku o gresci
function sakrijPoruku() {
    $('.poruka').hide();
}

// validacija unosa imena
$('#ime').on('input', function () {
    var ime = $(this).val();

    if (ime.length == '') {
        prikaziPoruku('Polje je prazno! Unesite ime');
        formValidacija.ime = false;
        otkljucajDugmeNastavi();
    }
    else {
        sakrijPoruku();
        formValidacija.ime = true;
        otkljucajDugmeNastavi();
        var regIme = new RegExp(/^[A-ZŽČĆŠĐa-zđšžćč]{1,11}(\s[A-ZŽČĆŠĐa-zđšžćč]{1,11})+$/);
        if (!regIme.test(ime)) {
            prikaziPoruku('Mozete koristiti samo slova sa razmakom izmedju imena i prezimena');
            formValidacija.ime = false;
            otkljucajDugmeNastavi();
        }
        else {
            sakrijPoruku();
            formValidacija.ime = true;
            otkljucajDugmeNastavi();
        }
    }
});

//provera validnosti input polja #telefon
$('#telefon').on('input', function () {
    var telefon = $(this).val();

    if (telefon.length == '') {
        prikaziPoruku('Polje je prazno! Unesite broj telefona');
        formValidacija.telefon = false;
        otkljucajDugmeNastavi();
    }
    else {
        sakrijPoruku();
        formValidacija.telefon = true;
        var regTelefon = new RegExp(/\d{3}\/(\d){3}[\-]?(\d){3}/);
        if (!regTelefon.test(telefon)) {
            prikaziPoruku('Unesite telefon u formatu 000/12345678');
            formValidacija.telefon = false;
        }
        else {
            sakrijPoruku();
            if (telefon.length > 11) {
                prikaziPoruku('Uneli ste previše cifara. Dozvoljeno je 11');
                formValidacija.telefon = false;
                otkljucajDugmeNastavi();
            }
            else {
                sakrijPoruku();
                formValidacija.telefon = true;
                otkljucajDugmeNastavi();
            }
        }
    }
});


// provera validnosti input polja #email
$('#email').on('input', function () {
    var email = $(this).val();

    if (email.length == '') {
        prikaziPoruku('Polje je prazno! Unesite email');
        formValidacija.email = false;
        otkljucajDugmeNastavi();
    }
    else {
        sakrijPoruku();
        formValidacija.email = true;
        otkljucajDugmeNastavi();
        var regEmail = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/);
        if (!regEmail.test(email)) {
            prikaziPoruku('Unesite email u formi primer@primer.com');
            formValidacija.email = false;
            otkljucajDugmeNastavi();
        }
        else {
            sakrijPoruku();
            formValidacija.email = true;
            otkljucajDugmeNastavi();
        }
    }
});

//validacija unosa datuma
$('#btnDaljeDatum').click(function () {
    var datumPrijave = $('#datumPrijave').val();
    var datumOdjave = $('#datumOdjave').val(); 
    if (datumPrijave == '' || datumOdjave == '') {
        prikaziPoruku('Ovo polje je obavezno.Unesti datum prijave i odjave');
    
    }
    else if(datumOdjave <= datumPrijave){
        sakrijPoruku();
        prikaziPoruku('Datum odjave mora biti veci od datuma prijave');
    }
    else {
        sakrijPoruku();
        $('.modal-datum').css('display', 'none');
        $('.modal-soba').css('display', 'flex');
    }
});

//JQ UI biblioteka datepicker
$(function () {
    $('#datumPrijave').datepicker();
    $('#datumOdjave').datepicker();
});

// Navigacija kroz formu dugmići
//prelazak na popunjavanje datuma
$('#btnDaljeKorisnik').on('click', function () {
    $('.modal-korisnik').hide();
    $('.modal-datum').show();
});

// vracanje na unos podataka o korisniku
$('#btnNazadDatum').on('click', function () {
    $('.modal-datum').hide();
    $('.modal-korisnik').show();
});

//vracanje sa izbora sobe na unos datuma
$('#btnNazadRezervacija').on('click', function () {
    $('.modal-soba').css('display', 'none');
    $('.modal-datum').css('display', 'flex');
});

