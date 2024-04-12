import React, { useEffect, useState } from "react";
import { NbaData } from "../../APIs/NbaAPI";
import formattedDate from "../../APIs/helpers/formattedDate";
import { Asteroid, NearEarthObjects } from "../../Models/AsteroidTypeModel";

const NbAst = () => {
    const [currentDate, setCurrentDate] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [asteroids, setAsteroids] = useState<NearEarthObjects | null>(null);
    

    useEffect(() => {
        const date = new Date();
        setCurrentDate(formattedDate(date));
        setStartDate(formattedDate(date));
        setEndDate(formattedDate(date));        
    }, []);

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const selectedDate = event.target.value;
        const maxDate = new Date(startDate);
        maxDate.setDate(maxDate.getDate() + 7);
        const maxEndDate = formattedDate(maxDate);

        if (selectedDate <= maxEndDate) {
            setEndDate(selectedDate);
        } else {
            alert("Please select a date within 7 days from the start date.");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const nbaRes = await NbaData({ startDate, endDate });
            return nbaRes;
        };

        const processData = async () => {
            const data = await fetchData();
            const asteroidsData: NearEarthObjects = {};

            for (const date in data.near_earth_objects) {
                if (Object.prototype.hasOwnProperty.call(data.near_earth_objects, date)) {
                    const asteroids = data.near_earth_objects[date];
                    asteroidsData[date] = asteroids;
                }
            }

            setAsteroids(asteroidsData);
        };

        processData();
    }, [startDate, endDate]);

    return (
        <>
            <div className="mt-20 container mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <span className="text-2xl mb-4">Search for Asteroids based on their closest approach date to Earth.</span>
                    <span className="text-xl mb-4">You could select the range maximum for 7 days</span>
                </div>

                <form className="mb-4 flex justify-center items-center gap-3">
                    <label className="block mb-2">Start Date:</label>
                    <input
                        onChange={handleStartDateChange}
                        defaultValue={currentDate}
                        type="date"
                        className="border rounded px-2 py-1 mb-2"
                        id="start-date"
                        name="start-date"
                    />

                    <label className="block mb-2">End Date:</label>
                    <input
                        onChange={handleEndDateChange}
                        value={endDate}
                        min={startDate}
                        type="date"
                        className="border rounded px-2 py-1 mb-4"
                        id="end-date"
                        name="end-date"
                    />
                </form>

                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Distance (km)</th>
                            <th className="px-4 py-2">Absolute Magnitude</th>
                            <th className="px-4 py-2">Diameter (m)</th>
                            <th className="px-4 py-2">Potential Hazardous</th>
                        </tr>
                    </thead>
                    <tbody>
                        {asteroids &&
                            Object.keys(asteroids).map((date: string) =>
                                asteroids[date].map((asteroid: Asteroid) => (
                                    <tr key={asteroid.id}>
                                        <td className="border px-4 py-2 text-center">{asteroid.name}</td>
                                        <td className="border px-4 py-2 text-center">{asteroid.close_approach_data[0].miss_distance.kilometers}</td>
                                        <td className="border px-4 py-2 text-center">{asteroid.absolute_magnitude_h}</td>
                                        <td className="border px-4 py-2 text-center">
                                            {asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} -{" "}
                                            {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)}
                                        </td>
                                        <td className="border px-4 py-2 text-center">{asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}</td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default NbAst;
