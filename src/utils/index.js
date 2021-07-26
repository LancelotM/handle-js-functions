const path = require('path');

let oldLog = console.log;
console.log = function(){
    if((typeof arguments[0] == 'string' || Array.isArray(arguments[0])) && arguments[0].includes('/')){
        arguments[0] = path.basename(arguments[0]);
    }
    oldLog.apply(console,arguments);
}

let oldWarn = console.warn;
console.warn = function(){
    if((typeof arguments[0] == 'string' || Array.isArray(arguments[0])) && arguments[0].includes('/')){
        arguments[0] = path.basename(arguments[0]);
    }
    oldWarn.apply(console,arguments);
}
