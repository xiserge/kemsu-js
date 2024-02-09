let n = 5

let r = ''
switch(n) {
    case 1: r = 'а'; break;
    case 2:
    case 3:
    case 4: r = 'ы'; break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10: r = ''; break;
}

console.log('На ветке сидит ' + n + ' ворон' + r)