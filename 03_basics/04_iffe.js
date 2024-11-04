// immediately invoked function expressions ( IIFE)
// IIFE?
// => sometime problems can occur because of global scope pollutions
// to remove that pollution we used iife

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})() ;
// in the above line semicolon is imp to tell where to stop the iife
// it doesnt know where to end the context
( () => {
    console.log( `db cooneecraew23`)
})();

( (name) => {
    console.log( `db cooneecraew23 ${name}`)
})("adnaan");


