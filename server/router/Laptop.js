import express from 'express';
import multer from "multer";
import path,{dirname} from "path";
import { fileURLToPath } from "url";
import { GetLaptop, AddLaptop, DeleteLaptop, EditLaptop} from '../controller/Laptop.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destinationPath = path.join(__dirname, '../../client/src/assets/img/uploadedImage');
        cb(null, destinationPath)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post('/', AddLaptop);
router.get('/', GetLaptop);
router.post('/upload', upload.single('laptop'));
router.put('/:id', EditLaptop);
router.delete('/:id', DeleteLaptop);
export default router