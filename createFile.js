var fs = require ('fs');
fs.appendFile ('createFile.txt', 'hello rachea',
function (err){
    if (err) throw err;
    console.log('saved');
});

fs.writeFile ('createFile.txt' , 'Hello Racheal',
function (err) {
    if (err) throw err;
    console.log ('saved!');
} );

fs.unlink ('createFile.txt', function(err){ 
    if (err) throw err;
    console.log ('saved!');
});