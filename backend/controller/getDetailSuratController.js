import axios from "axios";

export const getDetailSurat = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios.get(`https://equran.id/api/v2/surat/${id}`)
        res.json({
            status: 'success',
            data: response.data.data
        })
        
    } catch (error) {
        console.log("Error Fetching Data", error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}