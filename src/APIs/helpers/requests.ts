import { podData } from "../podAPI";

export const podDataFetch = async () => {
    try {
        const data = await podData();
        return data.url
    } catch (error) {
        console.error('Error occurred:', error);
    }
}
