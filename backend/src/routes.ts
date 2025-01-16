import {
  FastifyInstance, 
  FastifyReply, 
  FastifyRequest, 
  FastifyPluginOptions
} from 'fastify';

import { CreateNutritionController } from './controllers/CreateNutritionController';

export async function routes(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ hello: 'world' });
  });

  fastify.post('/create', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateNutritionController().handle(request, reply);
  });
}