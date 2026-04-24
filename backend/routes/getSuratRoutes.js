import express from 'express';
import axios from 'axios';
import { getSurat } from '../controller/getSuratController.js';
import { getDetailSurat } from '../controller/getDetailSuratController.js'

const router = express.Router();

router.get('/surat', getSurat); 
router.get('/surat/:id', getDetailSurat);

export default router;