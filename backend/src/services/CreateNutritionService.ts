import { DataProps } from "../types";
import { GoogleGenerativeAI } from "@google/generative-ai";
class CreateNutritionService {
  async execute({ name, weight,height, age, gender, objective, level }: DataProps) {

    try {
      const googleAI = new GoogleGenerativeAI(process.env.API_KEY!); 
      const model = googleAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const response = await model.generateContent(`Em que ano o javascript foi lancado?`);
      console.log(JSON.stringify(response , null, 2));

      return{ ok: true }

    } catch (error) {
      console.error(error);
      throw new Error('Erro ao criar dieta');
    }
    /* GoogleGenerativeAI.generateText({
      prompt: `crie uma dieta de 
      ${objective} para um ${gender} de 
      ${age} anos com peso ${weight} kg e altura 
      ${height} cm e que seja 
      ${level} de dificuldade.` 
    }); */

    return{
      message: 'Sua Dieta foi criada com sucesso(Service)!'
    }
  }
}

export { CreateNutritionService };