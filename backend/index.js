import express from 'express'
import axios from 'axios'

const app = express()
const port = 3000

app.get('/surat', async (req, res) => {
  try {

    const response =  await axios.get('https://equran.id/api/surat');

    res.json({
        status: 'success',
        source: 'equran.id',
        data : response.data
    })
    
  } catch (error) {
    console.log("Error Fetching Data", error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
})

app.get('/tafsir/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response =  await axios.get(`https://equran.id/api/tafsir/${id}`);

        res.json({
            status: 'success',
            source: 'equran.id',
            data : response.data
        });
    } catch (error) {
        console.log("Error Fetchig Data", error);
        res.status(500).json({
            status: 'error',
            message: error.response?.data?.message || error.message
        })   
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
