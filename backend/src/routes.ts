import {
  FastifyInstance, 
  FastifyReply, 
  FastifyRequest, 
  FastifyPluginOptions
} from 'fastify';

import { CreateNutritionController } from './controllers/CreateNutritionController';

export async function routes(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {

    let responseText = "```json\n{\n  \"nome\": \"Bognar\",\n  \"sexo\": \"M\",\n  \"idade\": 41,\n  \"altura\": 183,\n  \"peso\": 120,\n  \"objetivo\": \"emagrecimento\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"7:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"30g de aveia\",\n        \"200ml de leite desnatado\",\n        \"1 banana\",\n        \"1 colher de sopa de sementes de chia\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n      \"alimentos\": [\n        \"1 fruta (maça ou pera)\",\n        \"1 punhado de castanhas\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"100g de salada verde\",\n        \"100g de arroz integral\",\n        \"1 colher de sopa de azeite\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 iogurte desnatado\",\n        \"1 fatia de pão integral com 5g de queijo branco\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado\",\n        \"100g de brócolis\",\n        \"100g de batata doce\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Proteina em pó (whey protein)\",\n    \"Creatina (opcional, para auxiliar no treino)\",\n    \"Omega 3\"\n  ]\n}\n```\n";
    let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();
    let jsonObject = JSON.parse(jsonString);

    reply.send({ data: jsonObject });
  });

  fastify.post('/create', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateNutritionController().handle(request, reply);
  });
}