const chat_router = require("./chat_router")

function router(app){
  app.use("/",chat_router)
}
module.exports = router