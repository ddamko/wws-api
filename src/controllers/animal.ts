import AnimalService from "@services/animal"

export const GetAnimalById = async (ctx: { params: { id: string } }) => {
    const animalService = new AnimalService();
    return await animalService.GetAnimalById(ctx.params.id);
}