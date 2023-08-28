import { config } from "mssql";

const dbConfig: config = {
	user: process.env.DATEBASE_USER,
	password: process.env.DATABASE_PASSWORD,
	server: process.env.DATABASE_SERVER || "localhost",
	database: process.env.DATABASE_NAME,
	options: {
		encrypt: false,
		enableArithAbort: true,
	},
	parseJSON: true,
	arrayRowMode: false,
};

export default dbConfig;