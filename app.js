const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM("C:/Users/mrahman/Desktop/name_animation/index.html").window.document;

const logo=document.querySelectorAll('#logo path');
console.log(logo);
for(let i=0; i<logo.length;i++){
    console.log(logo[i].getTotalLength());
    /*console.log('Letter ${i} is ${logo[i].getTotalLength()}')*/
}

