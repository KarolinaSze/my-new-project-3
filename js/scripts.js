// plik scripts.js


var a = prompt('Pole trójkąta o podstawie a:'), h = prompt('i wysokości h:'), triangleArea = ('wynosi:');

triangleArea = (a * h / 2);

document.getElementById('demo').innerHTML = triangleArea;

console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
console.log(triangleArea)
