const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

const employes = [
  {
    name: 'Roberto Fontes',
    team: 'Front-end',
    admission_at: '28/04/2021',
  },
  {
    name: 'Adriana Rabelo',
    team: 'Designer UI/UX',
    admission_at: '28/04/2021',
  },
  {
    name: 'Jefersson Silva',
    team: 'Front-end',
    admission_at: '28/04/2021',
  },
  {
    name: 'Raquel Torres',
    team: 'Back-end',
    admission_at: '28/04/2021',
  },
  {
    name: 'Fernando Leal',
    team: 'Back-end',
    admission_at: '28/04/2021',
  },
];

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('pages/index', {
    data: employes,
  });
});

app.get('/about', function (req, res) {
  res.render('pages/about');
});

app.use(favicon(path.join(__dirname, 'views', 'favicon.ico')));

app.listen(7000, () => {
  console.log('✅️ Server started successfuly on http://localhost:7000');
});
