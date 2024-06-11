const tourData = require("../model/model")
const multer = require("multer");

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

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname,'..', 'server', 'uploads')); // Ensure correct path
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname));
        },
    });
    
    const upload = multer({ storage }).single('image');

    const { destTitle, location, grade, fees, description } = req.body;  
    // console.log(":::",req.file.path) 
    const imgSrc = req.file ? `server/uploads/${req.file.filename}` : null;

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
        const tour = await newtourData.save()
        res.status(200).json(tour)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

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