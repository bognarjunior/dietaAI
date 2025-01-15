import { FastifyRequest, FastifyReply } from "fastify";

class CreateNutritionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    //const { name, description, kcal, protein, carbs, fat } = request.body;
    reply.send({ message: 'Sua Dieta foi criada com sucesso' });
  }
}

export { CreateNutritionController };