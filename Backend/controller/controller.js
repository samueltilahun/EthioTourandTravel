const tourData = require("../model/model")
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ethio-tour-and-travel",
    format: async (req, file) => "png", // supports promises as well
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

const upload = multer({ storage });

const getDestinations = async (req, res) => {
    try {
        const data = await tourData.find({});
        if (!data || data.length === 0) {
            return res.status(400).json({ error: "No Destinations Found!" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const Admin = async (req, res) => {
    upload.single("image")(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
  
      const { destTitle, location, grade, fees, description } = req.body;
      const imgSrc = req.file ? req.file.path : null; // Cloudinary URL
  
      console.log("Image Path:", imgSrc); // Log the file path
  
      const newtourData = new tourData({
        imgSrc,
        destTitle,
        location,
        grade,
        fees: Number(fees),
        description,
      });
  
      try {
        const tour = await newtourData.save();
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