import { generateNanoID } from "../utils/helper.js";
import { saveUrl } from "../dao/short_url.js";

export const createShortUrlService = async (url) => {
    const short_url = generateNanoID(7);
    if(!short_url)throw new Error("Short URL not generated")
    
    await saveUrl(url, short_url)
    return short_url
}