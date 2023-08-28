import { Elysia, t } from "elysia";
import Datebase from "@database/database";
import { GetAnimalById } from "@controllers/animal";

const app = new Elysia().listen(3000);

app.get("/animal/:id", GetAnimalById, { params: t.Object({ id: t.String() }) })


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
