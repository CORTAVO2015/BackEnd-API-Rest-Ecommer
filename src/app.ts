import express, { Request, Response} from 'express';
import routeMain from './routes';


const app = express();

/** Routing: Enrrutamiento */
// http://localhost:3000/
app.get('/', (req: Request, res:Response) => {
    const message: string = 'Bienvenido a la API de Ecommerce';

    console.log(message);
    res.send(`<h1>${message}</h1>`);
});


// http://localhost:3000/home (Endpoint)
app.get('/home',(req: Request, res: Response) => {
    const namePage: string = 'Home'

    console.log(namePage);
    res.send(`<h1>${namePage}</h1>`);
});

/** Middleware */
app.use('/api', routeMain);


// app.use('/', routeAuth);

app.listen(3000, () => {
    console.log('Servidor lanzado en el puerto 3000');
});