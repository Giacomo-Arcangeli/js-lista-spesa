
const lista = ['pane' , 'latte' , 'carne' , 'pesce' , 'acqua'];

let spesa = ''

// for (let i = 0; i < lista.length; i++){
//     spesa += lista[i];
// }

let i = 0;
while(i < lista.length){
    spesa += lista[i];
    i++
}
document.getElementById('spesa').innerHTML = spesa;

