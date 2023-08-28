import Datebase from "@database/database";

class AnimalService {

    db: Datebase;

    constructor() {
        this.db = new Datebase();
    }
  
    async GetAnimalById(id: string) {
        if (!this.db) throw new Error("Database is not connected");
        await this.db.Connect();
        
        const result = await this.db.Execute<Record<string, string>>(
            "Api.AnimalData", 
            [ 
                "AnimalKey=" + id,
                "IncludeProof=1",
                "IncludeLactation=1",
            ]
        );
        await this.db.Close();
        
        return result;
    }

}

export default AnimalService;
