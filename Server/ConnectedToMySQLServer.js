const express = require('express');
const server = express();
const cors= require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'coins_project'
});

connection.connect((err) => {
    if(!err) {
        console.log("Success!");
    }
})

server.use(cors());

server.get('/coin_catalogs', (request, response) => {
    connection.query(`
        SELECT 
	        *
        FROM catalogs
    `,
    (err, res) => {
        response.json(res)
    })  
})

// добавляем фильтры в advanced filter из БД
server.get('/filters', (request, response) => {
    let filters = request.query.filters;
    filters = filters.split(',');

    let result = {};
    let i = 0;

    filters.forEach((filter) => {
        
        let query = `
            SELECT 
                *
            FROM ${filter}
        `;

        connection.query(query, (err,data) => {
            i++;
            if (err) {
                response.json('Server error');
            }
            result[filter]=data;
            if (filters.length === i) {
                response.json(result);
            }
        })
    })
})

server.get(`/catalog/:id`, (request, response)=>{
    connection.query(`
        SELECT
            *
        FROM coins_project.coins
        INNER JOIN coins_project.catalogs ON id = coins.catalog_id 	
        WHERE coins.catalog_id = ${request.params.id}
    `,
    (err, res)=>{
        response.json(res)
    }
    )
})

// запрос информации по одном каталоге по его айди
server.get('/listofcoins', (request, response) => {
    let condition=''
    i=1
    for(let nameCondition in request.query) {
        let and=''
        if (i>1) {
            and=' AND '
        }
        // WHERE c1.catalog_id=1
        // WHERE c1.description like '%chin%'
        if (nameCondition === 'catalog') {
           condition+= `${and}ci.catalog_id=${request.query[nameCondition]}`
           i++
        }
        if (nameCondition === 'metal') {
            condition+=`${and}ci.composition_id='${request.query[nameCondition]}'`
            i++
        }
        if(nameCondition === 'input'){
            condition+=`${and}ci.short_description LIKE '%${request.query[nameCondition]}%' OR ci.name LIKE '%${request.query[nameCondition]}%'  OR ci.description LIKE '%${request.query[nameCondition]}%'`
            i++
        }
        if (nameCondition === 'country') {
            condition+=`${and}ci.country_id='${request.query[nameCondition]}'`
            i++
        }
        if (nameCondition === 'quality') {
            condition+=`${and}ci.quality='${request.query[nameCondition]}'`
            i++
        }        
    }

    if(request.query.input_price_from != undefined && request.query.input_price_to!= undefined){
        and=' AND '
        condition+=`${and}ci.price BETWEEN ${request.query.input_price_from} and ${request.query.input_price_to}`
    } else if (request.query.input_price_from != undefined){
        and=' AND '
        condition+=`${and}ci.price > ${request.query.input_price_from} `
    } else if(request.query.input_price_to != undefined){
        and=' AND '
        condition+=`${and}ci.price < ${request.query.input_price_to} `
    }

    if(request.query.year_from != undefined && request.query.year_to != undefined){
        and=' AND '
        condition+=`${and}ci.year BETWEEN ${request.query.year_from} and ${request.query.year_to}`
    } else if (request.query.year_from != undefined){
        and=' AND '
        condition+=`${and}ci.year > ${request.query.year_from} `
    } else if(request.query.year_to != undefined){
        and=' AND '
        condition+=`${and}ci.year < ${request.query.year_to} `
    } 
    
    let query = `
        SELECT
            *
        FROM coins_project.coins ci
        WHERE ${condition}
    `;
    console.log(query);
    connection.query(
        query
    ,
    (err, res) => {
        console.log(res, err)
        response.json(res)
    } 
    )
    
})

// запрос информации об одной монете по её айди
server.get('/coinpage/:id', (request, response) => {
    connection.query(`
    SELECT         
        *
    FROM coins_project.coins c
        INNER JOIN coins_project.compositions cp ON cp.id = c.composition_id
        INNER JOIN coins_project.countries cpc ON cpc.id = c.country_id 
        INNER JOIN coins_project.qualities q ON q.id = c.country_id 
    WHERE c.coin_id = ${request.params.id}
    `,
    (err, res) => {
        response.json(res)
    })  
})

server.listen(3302, function() {
    console.log("Hello!")
})