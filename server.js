var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title: 'Article One | rikin patel',
    heading: 'Article one',
    date: 'sep 2 2017',
    content: `<p>
                this is article one and rikin has edited this.this is article one and rikin has edited this.this is article one and rikin has edited this.this is article one and rikin has edited this.this is article one and rikin has edited this.
                </p>
                
                
                <p>
                this is article one and rikin has edited this.this is article one and rikin has edited this.this is article one and rikin has edited this.this is article one and rikin has edited this.this is article one and rikin has edited this.
                </p>`
    
},

    'article-two' : {   
    title: 'Article two | rikin patel',
    heading: 'Article two',
    date: 'sep 21 2017',
    content: `<p>
    this is article two.
    </p>`
    
},

    'article-three' : {
    title: 'Article three | rikin patel',
    heading: 'Article three',
    date: 'sep 2 2017',
    content: `<p>
    this is article three.
    </p>`
    }  
};
function createTemplate (data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
        <body>
        <div class=container>
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h2>
                ${heading}
            </h2>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
        </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename',function (req, res)  {
    var articlename = req.params.articlename;
    res.send(createTemplate(articles[articlename]));
});    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
