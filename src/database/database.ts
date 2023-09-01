import { ConnectionPool, IRecordSet } from "mssql";
import dbConfig from "./config";

class Database {

    private conn: ConnectionPool | undefined;

    constructor() {
        this.conn = new ConnectionPool(dbConfig);
    }

    /**
     * Connect to the database
     */
    async Connect() {
        try {
            return await this.conn?.connect();
        } catch (err) {
            console.log("Database connection failed");
            console.log(err);
        }
    }

    /**
     * Disconnect from the database
     */
    async Close() {
        try {
            await this.conn?.close();
        } catch (err) {
            console.log("Database disconnection failed");
            console.log(err);
        }
    }

    /**
     * Query the database
     * @param query Query to execute
     * @param params Parameters to use in query
     * @returns Recordset
     * @example Query("SELECT * FROM Animal WHERE Id = @Id", ["Id=1"])
     * @example Query("SELECT * FROM Api.BaseAnimal(@BreedGroupName, @Gender, @MarketingGroups)", ["BreedGroupName=Dairy", "Gender=M", "MarketingGroups=ActiveLineup,LowPriced,NxGen"])
     */
    async Query<T>(query: string, params?: string[]): Promise<IRecordSet<T>> {
        if (!this.conn) throw new Error("Database is not connected");

        const request = this.conn.request();

        if (params)
            for (const param of params) {
                const [name, value] = param.split("=");
                request.input(name, value);
            }

        const result = await request.query<T>(query);
        return result.recordset;
    }

    /**
     * Execute a Stored Procedure
     * @param query Stored Procedure to execute
     * @param params Parameters to use in query
     * @returns Recordset
     * @example Execute("Api.AnimalData @AnimalKey, @IncludeProof, @IncludeLactation, @IncludeSons", ["AnimalKey=14HO07770", "IncludeProof=1", "IncludeLactation=1", "IncludeSons=1"])
     */
    async Execute<T>(sproc: string, params?: string[]) {
        if (!this.conn) throw new Error("Database is not connected");

        const request = this.conn.request();

        if (params)
            for (const param of params) {
                const [name, value] = param.split("=");
                request.input(name, value);
            }

        const result = await request.execute<T>(sproc);
        if (result.recordsets.length === 1) return result.recordsets[0];
        else
            return result.recordsets;
    }

}

export default Database;