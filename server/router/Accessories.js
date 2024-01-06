import express from 'express';
import multer from "multer";
import path,{dirname} from "path";
import { fileURLToPath } from "url";
import { GetAccessories, AddAccessories, DeleteAccessories, EditAccessories } from '../controller/Accessories.js';

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

const upload = multer({ storage: storage })

router.post('/', AddAccessories);
router.get('/', GetAccessories);
router.post('/upload', upload.single('accessorie'));
router.put('/:id', EditAccessories);
router.delete('/:id', DeleteAccessories);
export default router