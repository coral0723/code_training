const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('').map(char => {
        if(char >= 'A' && char <='Z')
            return char.toLowerCase();
        else if(char >= 'a' && char <= 'z')
            return char.toUpperCase();
    }).join('');
    
    console.log(str);
    
});
