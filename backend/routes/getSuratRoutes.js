import express from 'express';
import axios from 'axios';
import { getSurat } from '../controller/getSuratController.js';
import { getDetailSurat } from '../controller/getDetailSuratController.js'
import { getTafsir } from '../controller/getTafsirController.js';

const router = express.Router();

router.get('/surat', getSurat); 
router.get('/surat/:id', getDetailSurat);
router.get('/tafsir/:id', getTafsir);

export default router;