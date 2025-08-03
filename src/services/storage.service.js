var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file, filename) {
  const response = await imagekit.upload({
    file: file,
    fileName: filename,
    folder: "ai-socail-media"
  });
  return response
}


module.exports = uploadFile