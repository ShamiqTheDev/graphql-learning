import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL Server is running');
});

const root = { friend: () => {
    return {
        "id": 9357390092,
        "firstName": "M. Shamiq",
        "lastName": "Hussain",
        "email": "shamiq@estoreventures.net",
        "age": 23,
        "valid": true, // obviously CEO is always valid
    }
} };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, ()=> { console.log(`The node server is up and running on localhost:8080/graphql`) });