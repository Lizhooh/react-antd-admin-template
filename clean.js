const findFileExt = require('find-file-ext');
const path = require('path');
const fs = require('fs');

/* global __dirname */

findFileExt([path.join(__dirname, './build')], ['map'], [/node_module/])
    .then(res => {
        res.forEach(p => fs.unlinkSync(p));
        console.log('clean map completed.');
    });


