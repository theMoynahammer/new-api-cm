const Koa = require("koa");
const send = require("koa-send");
const Router = require("koa-router");
const { default: axios } = require("axios");
const cors = require("@koa/cors");

const app = new Koa();
app.use(cors());
const router = new Router();

const server = require("http").createServer(app.callback());

const port = process.env.PORT || 8080;

router.get("/axoltl-facts", async (ctx, next) => {
  const { data } = await axios.get("https://axoltlapi.herokuapp.com/");
  ctx.body = data;
});

app.use(router.routes()).use(router.allowedMethods());

console.log(`listening on port ${port}`);
server.listen(port);
