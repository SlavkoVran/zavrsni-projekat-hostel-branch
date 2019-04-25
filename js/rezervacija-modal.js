$('#btnDalje1').on('click', function(){
$('.modal-datum').css('display', 'flex');
});

$('#btnNazad2').on('click', function(){
    $('.modal-datum').css('display', 'none');
    });



$('#btnDalje2').on('click', function(){

var datumDolaska = $('#datumDolaska').val();
var sadasnjiDatum = Date.now(); 

console.log(datumDolaska);
console.log(sadasnjiDatum);

if (datumDolaska != 0 ){
   
    $('.poruka-datum').hide();
}
else{
    $('.poruka-datum').text('Niste uneli validan datum').show();
    
}


});








// function proveriValidaciju(){
//     if (formValidacija.ime && formValidacija.email  && formValidacija.telefon){
//         $('#btnDalje1').removeAttr('disabled');
//     }
//     else {
//         $('#btnDalje1').attr('disabled', true);
//     }
//     };
    
//     // provera validnosti input polja #ime
//     $('#ime').on('input', function(){
//     var ime = $(this).val();
    
//     function prikaziPoruku(sadrzaj){ 
//         $('.poruka-ime').text(sadrzaj).show();
//     };
    
//     function sakrijPoruku(){
//         $('.poruka-ime').hide();
//     }
    
//     if (ime.length < 1){
//         prikaziPoruku('Polje je prazno! Unesite ime');
//         formValidacija.ime = false;
//         proveriValidaciju();
    
    
//     }
//     else{
//         sakrijPoruku();
//         formValidacija.ime = true;
//         proveriValidaciju();
//         var testValidacijaIme = new RegExp(/^[A-ZŽČĆŠĐ][a-zđšžćč]{1,11}(\s[A-ZŽČĆŠĐ][a-zđšžćč]{1,11})+$/);
//         if(!testValidacijaIme.test(ime)){
//             prikaziPoruku('Mozete koristiti samo mala i velika slova');
//             formValidacija.ime = false;
//             proveriValidaciju();
//         }
//         else{
//     sakrijPoruku();
//     formValidacija.ime = true;
//     proveriValidaciju();
    
//         }
//     }
//     });
    
    
    