import express from 'express'
import axios from 'axios'

import  getSuratRoutes  from './routes/getSuratRoutes.js';


const app = express()
const port = 3000

app.use('/api', getSuratRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


