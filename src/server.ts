import 'module-alias/register';

import logger           from '@logger';
import * as path        from 'path';

import 'reflect-metadata';
import { buildSchema }  from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import resolvers from '@resolvers';

let bootstrap = async () => {
    const schema = await buildSchema({
        resolvers,
        emitSchemaFile: path.resolve('./src/modules/graphql/schema.graphql')
    });

    const server = new ApolloServer({
        schema,
        context: ({ req }) => ({
            token: req.headers.authorization
        }),
        playground: true,
        introspection: true
    });

    server
        .listen({ port: process.env.SERVER_PORT })
        .then(({ url }) => logger.info(`Server ready at ${url}`));
}
    
bootstrap();

declare const module: any;
if (module.hot) {
    module.hot.accept();
    module.hot.dispose();
}