const fs = require("fs");

var replacer = function(tpl, data) {
        // return tpl.replace(/\$\(([^\)]+)?\)/g, function($1, $2) { return data[$2]; });
        return tpl.replace(/\$\(([^\)]+)?\)/g, function($1, $2) { return data[$2]; });
    }
    /*
    var html = '<!DOCTYPE html>\
    <html lang="en">\
    <head>\
      <meta charset="UTF-8">\
      <title>Document $(title)</title>\
    </head>\
    <body>\
      <h1>Test file, $(text)</h1>\
    </body>\
    </html>';

    var result = replacer(html, { "title": "my title", "text": "text is this" });
    */

function kebab2Pascal(str) {
    str += '';
    str = str.split('-');

    function upper(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
    }

    for (var i = 0; i < str.length; i++) {
        var str2 = str[i].split('/');
        for (var j = 0; j < str2.length; j++) {
            str2[j] = upper(str2[j]);
        }
        str[i] = str2.join('');
    }
    return str.join('');
}

function kebab2Camel(str) {
    let arr = str.split('-');
    let capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item);
    let capitalString = capital.join("");
    return capitalString;
}

function kebab2Upper(str) {
    const replaceAll = function(str, search, replacement) {
        var target = str;
        return target.replace(new RegExp(search, 'g'), replacement);
    };
    /*
        String.prototype.replaceAll = function(search, replacement) {
            var target = this;
            return target.replace(new RegExp(search, 'g'), replacement);
        };
        
        String.prototype.replaceAll = function(search, replacement) {
            var target = this;
            return target.split(search).join(replacement);
        };
    */
    const str2 = replaceAll(str, '-', '_');
    return str2.replace(/(\-\w)/g, function(m) { return m[1].toUpperCase(); }).toUpperCase();
}


const createFile = (source, name, objReplace, encoding = 'utf8') => {
    fs.readFile(source, encoding, (err, contents) => {
        const nText = replacer(contents, objReplace);
        fs.promises.writeFile(name, nText)
            .then(() => {})
            .catch(console.error);
    });
}

module.exports = {
    replacer,
    kebab2Pascal,
    kebab2Camel,
    kebab2Upper,
    createFile,
};