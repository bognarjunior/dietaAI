import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutritionService } from "../services/CreateNutritionService";
import { DataProps } from "../types";

class CreateNutritionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {

    const { name, weight,height, age, gender, objective, level } = request.body as DataProps;
    const create = new CreateNutritionService();
    
    const nutrition = await create.execute({ 
      name, 
      weight,
      height, 
      age, 
      gender, 
      objective, 
      level 
    });

    reply.send(nutrition);
  }
}

export { CreateNutritionController };