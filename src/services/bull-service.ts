import Database from "@database/database";
import { GlobalId, DataCategory } from "@app-types/bull";

class BullService {

    db: Database;

    constructor() {
        this.db = new Database();
    }

    private async GetGlobalId(id: string) {
        await this.db.Connect();

        const result = await this.db.Query<GlobalId>(
            "SELECT dbo.GetGlobalId(@AnimalIdentifier, 'M') GlobalId",
            ["AnimalIdentifier=" + id]
        );
        return result[0].GlobalId;
    }

    async GetBullDataByCategory<T>(id: string, category: DataCategory) {
        if (category === "base") id = await this.GetGlobalId(id);
        if (!this.db.Connect()) await this.db.Connect();

        const result = await this.db.Execute<T>(
            "Api.AnimalDataBySection",
            ["GlobalId=" + id, "Dataset=" + category]
        );
        return result;
    }
}

export default BullService;