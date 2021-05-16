## Connection
---
### Contents
1. [Introduction](#Introduction)
2. [Creating a new connection](#Creating)
3. [Working with connection](#Working)

---
### Introduction
- Interaction with the database is only possible once you setup a connection. TypeORM's Connection does not setup a database connection as it might seem, instead it sets up a connection pool. 

- If you are interested in a real database connection, then refer to QueryRunner documentation. Each instance of QueryRunner is a separate isolated database connection.

- Connection pool setup is established once connect method of the Connection is called. connect method is called automatically if you setup your connection using createConnection function. Disconnection (closing all connections in the pool) is made when close is called. 

### Creating a new connection
There are several ways how a connection can be created. The most simple and common way is to use `createConnection` and `createConnections` functions.

`createConnection` creates a single connection:
``` ts
import {createConnection, Connection} from "typeorm";

const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test"
});
```
- You can create ormconfig.json file in the root of your project and connection options will be automatically read from this file by those methods. Root of your project is the same level where your node_modules directory is.
``` ts
import {createConnection, createConnections, Connection} from "typeorm";

// here createConnection will load connection options from
// ormconfig.json / ormconfig.js / ormconfig.yml / ormconfig.env / ormconfig.xml
// files, or from special environment variables
const connection: Connection = await createConnection();

// you can specify the name of the connection to create
// (if you omit name it will create a connection without name specified)
const secondConnection: Connection = await createConnection("test2-connection");

// if createConnections is called instead of createConnection then
// it will initialize and return all connections defined in ormconfig file
const connections: Connection[] = await createConnections();
```

- Different connections must have different names. By default, if connection name is not specified it's equal to default. Usually, you use multiple connections when you use multiple databases or multiple connection configurations.

- Once you created a connection you can obtain it anywhere from your app, using getConnection function:
``` ts
import {getConnection} from "typeorm";

// can be used once createConnection is called and is resolved
const connection = getConnection();

// if you have multiple connections you can get connection by name
const secondConnection = getConnection("test2-connection");
``` 

### Working with connection
- Once you set your connection up, you can use it anywhere in your app using getConnection function:
``` ts
import {getConnection} from "typeorm";
import {User} from "../entity/User";

export class UserController {

    @Get("/users")
    getAll() {
        return getConnection().manager.find(User);
    }

}
```