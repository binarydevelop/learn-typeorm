import "reflect-metadata";
import {createConnection, Connection} from 'typeorm'


const app = async () => {   
    const connection: Connection = await createConnection();
} 

app();