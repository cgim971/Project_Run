import Express, { Application } from 'express';
import WS from 'ws';

const App :Application  = Express();


const httpServer = App.listen(50000, ()=>{
    console.log("Server is running on 50000 port");
});