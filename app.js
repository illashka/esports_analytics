let express = require('express');
let handlebars = require('express-handlebars').create({defaultLayout:'main'});

let app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('home', {title:'Home'});
})

app.get('/csgo', (req, res)=>{
    res.render('csgo', {title: 'Counter Strike: Global Offensive'})
})

app.get('/dota', (req, res)=>{
    res.render('dota', {title: 'Dota 2'})
})

app.get('/lol', (req, res)=>{
    res.render('lol', {title: 'League of Legends'})
})

app.use((req, res) => {
    res.status(404);
    res.render('404');
})

app.use((req, res)=> {
    res.status(500);
    res.render('500');
})


app.listen(3000);