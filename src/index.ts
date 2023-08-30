import { Elysia, t } from "elysia";
import { GetBull, GetBullHealth, GetBullLineage } from "@controllers/bull-controller";

const app = new Elysia().listen(3000);

app.get("/bull/:id", GetBull, { params: t.Object({ id: t.String() }) });
app.get("/bull/health/:id", GetBullHealth, { params: t.Object({ id: t.String() }) });
app.get("/bull/lineage/:id", GetBullLineage, { params: t.Object({ id: t.String() }) });

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
