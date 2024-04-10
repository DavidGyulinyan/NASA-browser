import axios from 'axios';

interface podDataProps {
    selectedDate: string, 
    currentDate: string
}

export const podData = async ({selectedDate, currentDate}: podDataProps) => {
    try {
        const {data} = await axios.get(`https://api.nasa.gov/planetary/apod?date=${selectedDate || currentDate}&thumbs=false&api_key=DetxjfUBvwdhUow1iSLC471HjXISTbB3auhJdgY2`);
        console.log(data);
        
        return {data: data.url, title: data.title};
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
