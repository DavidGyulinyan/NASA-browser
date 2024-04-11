import { useEffect, useState } from "react";
import { podData } from "../../APIs/podAPI";

const Pod = () => {

    const [currentDate, setCurrentDate] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [photo, setPhoto] = useState<string>('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const date = new Date();
        const formattedDate = `${date.getFullYear().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${(date.getDate()).toString().padStart(2, '0')}`;
        setCurrentDate(formattedDate);
        
        async function fetchData() {
            const podRes = await podData({selectedDate, currentDate})
            const photoOfTheDay = await podRes.data;
            const descriptionOfPhoto = await podRes.title
            setPhoto(photoOfTheDay);
            setDescription(descriptionOfPhoto)
        }
        fetchData();
    }, [currentDate, selectedDate]);

    
    
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSelectedDate(event.target.value);
    };


    return (
        <>
            <div className="w-full flex flex-col justify-center items-center px-2 py-10">
                <form className="w-60 text-center flex flex-col items-center gap-3">
                    <label htmlFor="pod">Insert the date։ photo of the day</label>
                    <input
                        id="pod"
                        defaultValue={currentDate}
                        max={currentDate}
                        type="date"
                        onChange={handleDateChange}
                        placeholder="Enter your search query"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-800"
                    />
                </form>

            </div>

            {photo 
            ?
                <div className="w-full flex flex-col justify-center items-center gap-2 py-3">
                    <span className="text-2xl">{description}</span>
                    <img className="h-[58rem]" src={photo} alt="Astronomy photo of the day" />
                </div>
                :
                <div className="w-full flex flex-col justify-center items-center gap-2 py-3">
                    <span className="text-2xl text-red-600 text-center">Wait for data <br />or check your network connection</span>
                </div>

            }

        </>
    )
}

export default Pod;
