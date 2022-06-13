

module.exports = {
    async test (req, res) {
        const test = req.query.hello;

        res.status(200).send("Accepted " + test);
    },

    async upMessage(req, res) {
        res.status(200).send("Server is UP")
    }
}