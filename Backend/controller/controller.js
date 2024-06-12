const cloudinary = require('cloudinary').v2;
const tourData = require("../model/model");
const multer = require('multer');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'server/uploads/'); // Temporary storage before uploading to Cloudinary
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const Admin = async (req, res) => {
  upload.single("image")(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { destTitle, location, grade, fees, description } = req.body;

    let imgSrc = null;
    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'uploads',
        });
        imgSrc = result.secure_url; // Get the URL from Cloudinary
      } catch (uploadError) {
        return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
      }
    }

    console.log("Image Path:", imgSrc); // Log the Cloudinary URL

    const newTourData = new tourData({
      imgSrc,
      destTitle,
      location,
      grade,
      fees: Number(fees),
      description,
    });

    try {
      const tour = await newTourData.save();
      res.status(200).json(tour);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};

const Packages = () => {

}

const About = () => {
    
}
const Pages = () => {
    
}
const News = () => {
    
}
const Contact = () => {
    
}

const Booknow = () => {
    
}

module.exports = {
    getDestinations,
    Admin,
    Packages,
    About,
    Pages,
    News,
    Contact,
    Booknow
}