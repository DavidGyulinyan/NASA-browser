import axios from 'axios';

interface apodDataProps {
    selectedDate: string, 
    currentDate: string
}

export const apodData = async ({selectedDate, currentDate}: apodDataProps) => {
    try {

        const {data} = await axios.get(`https://api.nasa.gov/planetary/apod?date=${selectedDate || currentDate}&thumbs=false&api_key=DetxjfUBvwdhUow1iSLC471HjXISTbB3auhJdgY2`);        
        return {
            data: data.url,
            title: data.title
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
