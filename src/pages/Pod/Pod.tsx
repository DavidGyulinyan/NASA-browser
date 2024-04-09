import { useEffect, useState } from "react";
import { podDataFetch } from "../../APIs/helpers/requests";

const Pod = () => {

    const [date, setDate] = useState<string>('');
    const [photo, setPhoto] = useState<string>('');

    useEffect(() => {
        const today = new Date();
        const formattedDate = `${(today.getDate()).toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear().toString().padStart(2, '0')}`;
        setDate(formattedDate);
    }, []);


    useEffect(() => {
        async function fetchData() {
            const photoOfTheDay = await podDataFetch();
            setPhoto(photoOfTheDay);
        }
        fetchData();
    }, []);


    return (
        <>
            <div className="w-full flex flex-col justify-center px-2 py-10">
                <form className="flex flex-col items-center">
                    <input
                        defaultValue={date}
                        type="text"
                        placeholder="Enter your search query"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-800"
                    />
                    <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-2">
                        Search
                    </button>
                </form>

            </div>

            <div className="w-full flex justify-center items-center">
                <img src={photo} alt="Astronomy of the day" />
            </div>
        </>
    )
}

export default Pod;
