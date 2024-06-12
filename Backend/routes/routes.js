const express = require("express");
const routes = express.Router();
const multer = require("multer")
const path = require('path')
const controller = require("../controller/controller")

// Set up multer for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'server/uploads/');
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + path.extname(file.originalname));
//     },
//   });
  
// const upload = multer({ storage });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
      folder: 'uploads', // Optional folder name on Cloudinary
      format: async (req, file) => 'png', // Supports promises as well
      public_id: (req, file) => Date.now(), // Use a unique identifier for the file
  },
});

const upload = multer({ storage });

routes.get('/', controller.getDestinations)
routes.post('/', upload.single('image'), controller.Admin)
routes.get('/packages', controller.Packages)
routes.get('/about', controller.About)
routes.get('/pages', controller.Pages)
routes.get('/news', controller.News)
routes.get('/contact', controller.Contact)
routes.get('/booknow', controller.Booknow)

module.exports = routes;