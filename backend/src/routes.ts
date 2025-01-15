import {
  FastifyInstance, 
  FastifyReply, 
  FastifyRequest, 
  FastifyPluginOptions
} from 'fastify';

export async function routes(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ hello: 'world' });
  });
}