const path = require('path');
const express = require('express');


const app = express();

app.use('', express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  return response.sendFile('index.html', { root: '.' });
});

app.get('/contact', (request, response) => {
  return response.sendFile('contact.html', { root: '.' });
});

app.get('/for-alexis', (request, response) => {
  return response.sendFile('janmarc.html', { root: '.' });
});

app.get('/rey', (request, response) => {
  return response.redirect('https://www.facebook.com/rey.lujario');
});

app.get('/gab', (request, response) => {
  return response.redirect('https://www.facebook.com/renzgabriel.ordono');
});

app.get('/haworld', (request, response) => {
  return response.redirect('https://www.facebook.com/haworldabrina');
});


const port = '8000';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
