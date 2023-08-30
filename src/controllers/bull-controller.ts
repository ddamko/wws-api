import { Bull } from "@app-types/bull";
import BullService from "@services/bull-service";

const bullService = new BullService();

export const GetBull = async (ctx: { params: { id: string } }) => {
    return await bullService.GetBullDataByCategory<Bull>(ctx.params.id, "base");
}

export const GetBullHealth = async (ctx: { params: { id: string } }) => {
    return await bullService.GetBullDataByCategory(ctx.params.id, "healthTest");
}

export const GetBullLineage = async (ctx: { params: { id: string } }) => {
    return await bullService.GetBullDataByCategory(ctx.params.id, "lineage");
}