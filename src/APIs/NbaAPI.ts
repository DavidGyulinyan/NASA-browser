import axios from 'axios';
import { NbaDataProps } from '../Models/NbAstTypeModel';

export const NbaData = async ({startDate, endDate}: NbaDataProps) => {
    try {

        const {data} = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=icjU8naFvIm0VSuz7GKfq9ounzt6wqJMkPmv6nZn`);
        return data

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
