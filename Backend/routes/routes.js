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
  
routes.get('/', controller.getDestinations)
routes.post('/', controller.Admin)
routes.get('/packages', controller.Packages)
routes.get('/about', controller.About)
routes.get('/pages', controller.Pages)
routes.get('/news', controller.News)
routes.get('/contact', controller.Contact)
routes.get('/booknow', controller.Booknow)

module.exports = routes;