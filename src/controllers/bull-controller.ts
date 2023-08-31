import { Bull, BullHealthTest, BullLineage } from "@app-types/bull";
import BullService from "@services/bull-service";

const bullService = new BullService();

export const GetBull = async (ctx: { params: { id: string } }) => {
    return await bullService.GetBullDataByCategory<Bull>(ctx.params.id, "base");
}

export const GetBullHealthTests = async (ctx: { params: { id: string } }) => {
    return await bullService.GetBullDataByCategory<BullHealthTest>(ctx.params.id, "healthtest");
}

export const GetBullLineage = async (ctx: { params: { id: string } }) => {
    return await bullService.GetBullDataByCategory<BullLineage>(ctx.params.id, "lineage");
}