let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    let cats2 = [];
    return cats2 = [...cats, name];
}
function prependCat(name){
    let cats2 = [];
    return cats2 = [name, ...cats];
}
function removeLastCat(){
    let cats2 = [];
    return cats.slice(0,cats.length -1);    
}
function removeFirstCat(){
    let cats2 = [];
    return cats.slice(1);    
}