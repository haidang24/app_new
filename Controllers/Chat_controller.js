class Chat_controller {
    index(req, res) {
        res.render("index")
    }
}

module.exports = new Chat_controller