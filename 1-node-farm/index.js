const http = require('http');
const url = require('url');
const fs = require('fs');

const slugify = require('slugify');

const replaceTemplate = require('./starter/modules/replaceTemplate');


const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

dataObj.forEach(el => {
    el.slug = slugify(el.productName, { lower: true });
});

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    // Overview page
    if(pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.end(output);
    // Product page
    } else if(pathname.startsWith('/product/')) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        const slug = pathname.split('/')[2];
        const product = dataObj.find(p => p.slug === slug);
        const output = replaceTemplate(tempProduct, product);
        res.end(output);
    // API page
    } else if(pathname === '/api') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(data);
    // Not found page
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server is listening on port 8000');
});