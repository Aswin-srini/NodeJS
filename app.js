//inbuild module
const { rejects } = require('assert');
const { resolve } = require('path');
const fs = require('fs');
const { error } = require('console');
const http = require('http');
const  url  = require('url');

//user define module

const page = require("./modules/transferData");
const desc = require("./modules/transfDataabt");

// Create the variable to load data of lists and Templets

let list=JSON.parse(fs.readFileSync("./datafile/list_movies.json", 'utf-8'));
let lst = fs.readFileSync("./html/list.html",'utf-8');
let temp = fs.readFileSync("./html/index.html",'utf-8');
let abtmvi = fs.readFileSync("./html/about.html",'utf-8');



// Create Server

const server = http.createServer((request,response)=>{

    
    let {query , pathname} = url.parse(request.url,true);

    console.log();

    getMovie = list.find(movie => movie.name === query.name)

    if(pathname.includes('/movie') || pathname.includes('/')){
        if(!query.name){
            let Templets = list.map((data)=>{
                return page(lst,data);
            })
            let finalPage = temp.replace('{{%LIST%}}',Templets);
            response.end(finalPage);
        }else{
            let abt = desc(abtmvi,getMovie)
            let descpage = temp.replace('{{%LIST%}}',abt);
            response.end(descpage)
        }
    }else{
        response.end('Error:404')
    }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server Created....')
});


// const getMovie = list.find(movie => movie.name === 'Tenet');
// console.log(getMovie);
// let ast = getMovie.cast_and_crew.cast;

//     console.log(ast[0])
