import Database from "@database/database";
import { GlobalId, Bull, DataCategory } from "@app-types/bull";

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
        const globalId = await this.GetGlobalId(id);

        const result = await this.db.Execute<T>(
            "Api.AnimalDataBySection", 
            ["GlobalId=" + globalId, "Dataset=" + category]
        );
        return result;
    }
}

export default BullService;