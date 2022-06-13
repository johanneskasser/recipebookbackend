

module.exports = {
    async test (req, res) {
        const test = req.query.hello;

        res.status(200).send("Accepted " + test);
    }
}