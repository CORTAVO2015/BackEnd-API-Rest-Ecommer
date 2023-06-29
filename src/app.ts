import express from 'express';

const app = express();

/** Routing: Enrrutamiento */
// http://localhost:3000/
app.get('/', (req, res) => {
    const message = 'Bienvenido a la API de Ecommerce';

    console.log(message);
    res.send(`<h1>${message}</h1>`);
});


// http://localhost:3000/home
app.get('/home',(req, res) => {
    const namePage = 'Home'

    console.log(namePage);
    res.send(`<h1>${namePage}</h1>`);
});

app.listen(3000, () => {
    console.log('Servidor lanzado en el puerto 3000');
});