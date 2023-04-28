const { File } = require("../model/files")
const { Client } = require("../utils/config/sanity")
const fs = require("fs")


const PostFile = async (response, request) => {
    try {
        const postToSanity = await Client.assets.upload('file', fs.createReadStream(`${request.file?.path}`), { filename: `${request.file?.originalname.replaceAll(' ', '-')}` })
        
        const file = await File.create({
          url: postToSanity.url,
          size: postToSanity?.size,
          name: postToSanity?.originalFilename,
          mimeType: postToSanity?.mimeType,
          extension: postToSanity?.extension,
          cms_id: postToSanity?._id,
          createdAt: postToSanity?._createdAt,
          updatedAt: postToSanity?._updatedAt,
        });

        response.status(201).json(file)
    } catch (error) {
        
    }
}


module.exports = {
    PostFile


}