const express=require("express")
const chat_controller = require("../Controllers/Chat_controller")
const chat_router=express.Router()

chat_router.get("/",chat_controller.index)

module.exports=chat_router
