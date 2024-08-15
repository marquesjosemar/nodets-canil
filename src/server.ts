// IMPORTANDO AS BIBLIOTECAS
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

import mainRoutes from './routes/index';

dotenv.config();

//servidor
const server = express();



//configurando template engine - mustache
server.set('view', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());



//configurando pasta publica
server.use(express.static(path.join(__dirname, '../public')));




//rotas
server.use(mainRoutes);

server.use((req,res)=>{
    res.send('Pagina não encontrada');
});



//servidor 
server.listen(process.env.PORT);