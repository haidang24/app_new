class Chat_controller {
    index(req, res) {
        res.sendFile(__dirname + '/index.html');
    }
}

module.exports = new Chat_controller