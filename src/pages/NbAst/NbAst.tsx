import React, { useEffect, useState } from "react";
import { NbaData } from "../../APIs/NbaAPI";
import formattedDate from "../../APIs/helpers/formattedDate";
import { Asteroid, NearEarthObjects } from "../../Models/AsteroidTypeModel";
import { useTranslation } from "react-i18next";
import { NbastType } from "../../Models/NbastType";

const NbAst = () => {
    const { t } = useTranslation();
    const nbastTitles: NbastType = {
        titleKey: "nearbastTitle",
        subTitleKey: "nearbastSubtitle",
        startDateString: "startDate",
        endDateString: "endDate",
        nearbastSubtitle: "nearbastSubtitle",
        asteroidName: "asteroidName",
        asteroidDistance: "asteroidDistance",
        asteroidMagnitude: "asteroidMagnitude",
        asteroidDiameter: "asteroidDiameter",
        asteroidHazardness: "asteroidHazardness",
    }

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
            alert(t(nbastTitles.nearbastSubtitle));
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
                    <span className="text-2xl text-center mb-4">{t(nbastTitles.titleKey)}</span>
                    <span className="text-xl mb-4">{t(nbastTitles.subTitleKey)}</span>
                </div>

                <form className="mb-4 flex justify-center items-center gap-3">
                    <label className="block mb-2">{t(nbastTitles.startDateString)}:</label>
                    <input
                        onChange={handleStartDateChange}
                        defaultValue={currentDate}
                        type="date"
                        className="border rounded px-2 py-1 mb-2"
                        id="start-date"
                        name="start-date"
                    />

                    <label className="block mb-2">{t(nbastTitles.endDateString)}:</label>
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

                <div className="table-container overflow-x-auto">
                <table className={`table-auto w-full ${!asteroids ? "flex flex-col justify-center items-center" : ""}`}>
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">{t(nbastTitles.asteroidName)}</th>
                                <th className="px-4 py-2">{t(nbastTitles.asteroidDistance)}</th>
                                <th className="px-4 py-2">{t(nbastTitles.asteroidMagnitude)}</th>
                                <th className="px-4 py-2">{t(nbastTitles.asteroidDiameter)}</th>
                                <th className="px-4 py-2">{t(nbastTitles.asteroidHazardness)}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {asteroids ? (
                                <>
                                    {Object.keys(asteroids).map((date: string) =>
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
                                    )}
                                </>
                            ) : (
                                <tr>
                                    <td className="text-2xl text-red-600 text-center" colSpan={5}> Wait for data or check your network connection</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default NbAst;
