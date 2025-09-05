const UrlModel = require("./models/UrlModel");
const { nanoid } = require('nanoid');
const Link = async (req, res) => {
    const {longurl}= req.body;
   //  res.send("url created successfully");
   const shorturl = nanoid(5);
   const newData =await UrlModel.create({longUrl:longurl, shortUrl:shorturl});
   res.json({
       data: {
         shortUrl: shorturl
       }
     });      
}

module.exports = Link;


const Load = async (req, res) => {
    const shortUrl=req.params.url;
    const Url=await UrlModel.findOne({shortUrl});
    if (Url) {
       return res.redirect(Url.longUrl);
   } else {
       return res.status(404).send("URL not found");
   }
}

module.exports = Load;

