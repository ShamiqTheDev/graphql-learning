import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        email: String
        age: Int
        valid: Boolean
    }

    type Query {
        friend: Friend
    }
`);

export default schema;