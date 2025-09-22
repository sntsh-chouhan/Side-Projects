import { createShortUrlService } from "../services/short_url.services.js";
import { getUrl } from "../dao/short_url.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res, next) => {
    const {url} = req.body
    const short_url = await createShortUrlService(url)

    res.send({
        short_url,
        url,
    })
})

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
    const {shortUrl} = req.params

    console.log(shortUrl)

    const url = await getUrl(shortUrl)

    if(!url){
        res.status(404).send(`url not found baba on "http://localhost:3000/api/${shortUrl}"`)
    }
    res.redirect(url.full_url)
})