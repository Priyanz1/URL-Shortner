const UrlModel = require("./models/UrlModel");
const { nanoid } = require('nanoid');
const { validationResult } = require('express-validator');

const Link = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { longurl } = req.body;
        const shorturl = nanoid(8);
        const newData = await UrlModel.create({ longUrl: longurl, shortUrl: shorturl });
        res.json({
            data: {
                longUrl: longurl,
                shortUrl: shorturl
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
}

const Load = async (req, res) => {
    try {
        const shortUrl = req.params.url;
        const Url = await UrlModel.findOne({ shortUrl });
        if (Url) {
            return res.redirect(Url.longUrl);
        } else {
            return res.status(404).send("URL not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
}

module.exports = { Link, Load };

