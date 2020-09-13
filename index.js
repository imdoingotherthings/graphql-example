const express = require('express');
// importing the compatibility layer for graphql
const expressGraphQL = require('express-graphql');
const app = express();
// using express middleware to add graphql and enabling graphiql
app.use('/graphql', expressGraphQL.graphqlHTTP({
    graphiql: true
}));
app.listen(4000, (req, res) => {
    console.log('listening on port 4000');
});