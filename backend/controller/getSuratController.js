import axios from "axios";

export const getSurat = async (req, res) => {
    try {
        const response = await axios.get('https://equran.id/api/surat');
        res.json({
            status: 'success',
            data: response.data.data
        })
        
    } catch (error) {
        console.log("Error Fetching Data", error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}