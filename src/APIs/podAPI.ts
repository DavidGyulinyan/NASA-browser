import axios from 'axios';

export const podData = async () => {
    try{
        const data = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DetxjfUBvwdhUow1iSLC471HjXISTbB3auhJdgY2`)
        .then(res => {
            const photo = res.data;
            return photo
        })
        return data;

    }catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }

}
