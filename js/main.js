// var name = 35 ;
// var b = 'Привет, ';
// var db = 'мир!';
// var c = false ;


// a = 456;

// a = prompt ('напишите число ');

// if (  a == 37) {
//     alert ('a= 37');
// }else {
//     alert ('что то другое');
// }


// for (var i =0 ; i < 5 ; i++ ) {
//     alert (i);

// }

// var obj = {
//     'key':'value'
// }
var btn = document.getElementById ('btn');
btn.onclick = function  () {
    
    var text = document.querySelector ('p.intro');
    text.classList.add ('red')
    var img = document.querySelector ('.desktop');
    img.style.display = 'none';
};