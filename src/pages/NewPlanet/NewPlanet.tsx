import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormData } from '../../Models/NewPlanetTypeModel';
import { useTranslation } from 'react-i18next';
import { NewPlanetTypes } from '../../Models/NewPlanetType';


const NewPlanet: React.FC = () => {

    const { t } = useTranslation();
    const newPlanetTitles: NewPlanetTypes = {
        titleKey: "newPlanetTitle",
        planetName: "newPlanetName",
        galaxyName: "planetGalaxyName",
        diameter: "planetDiameter",
        distance: "planetDistance",
        yourName: "userName",
        yourEmail: "userEmail",
        submitTitle: "submitButton",
        reqPlanetName: "reqPlanetName",
        planetNameChar: "planetNameChar",
        reqGalaxyName: "reqGalaxyName",
        planetDiameterChar: "planetDiameterChar",
        reqDiameter: "reqDiameter",
        reqDistance: "reqDistance",
        reqUserName: "reqUserName",
        planetDistanceChar: "planetDistanceChar",
        reqUserEmail: "reqUserEmail",
        userEmailChar: "userEmailChar",
        selectGalaxy: "selectGalaxy",
        somewhereElse: "somewhereElse",
    }

    const validationSchema = Yup.object().shape({
        planetName: Yup.string().min(5, t(newPlanetTitles.planetNameChar)).required(t(newPlanetTitles.reqPlanetName)),
        galaxyName: Yup.string().oneOf(
            ['Milky Way', 'Messier 83', 'Andromeda', 'Sombrero', 'Pinwheel', 'Tadpole', 'Somewhere else...'],
            'Invalid galaxy name'
        ).required(t(newPlanetTitles.reqPlanetName)),
        diameter: Yup.number().required(t(newPlanetTitles.planetDiameterChar)).positive(t(newPlanetTitles.reqDiameter)),
        distance: Yup.number().required(t(newPlanetTitles.planetDistanceChar)).positive(t(newPlanetTitles.reqDistance)),
        yourName: Yup.string().required(t(newPlanetTitles.reqUserName)),
        email: Yup.string().email(t(newPlanetTitles.userEmailChar)).required(t(newPlanetTitles.reqUserEmail)),
    });


    const initialValues: FormData = {
        planetName: '',
        galaxyName: '',
        diameter: 0,
        distance: 0,
        yourName: '',
        email: '',
    };

    const handleSubmit = (values: FormData, { resetForm }: FormikHelpers<FormData>) => {
        console.log(values);
        resetForm();
    };

    return (
        <>
            <div className="w-full max-w-md mx-auto pt-14">
                <div className='text-center text-xl font-bold mb-4'>{t(newPlanetTitles.titleKey)}</div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="planetName">
                                    {t(newPlanetTitles.planetName)}
                                </label>
                                <Field
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="planetName"
                                    name="planetName"
                                />
                                <ErrorMessage name="planetName" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="galaxyName">
                                    {t(newPlanetTitles.galaxyName)}
                                </label>
                                <Field
                                    as="select"
                                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    id="galaxyName"
                                    name="galaxyName"
                                >
                                    <option value="">{t(newPlanetTitles.selectGalaxy)}</option>
                                    <option value="Milky Way">Milky Way</option>
                                    <option value="Messier 83">Messier 83</option>
                                    <option value="Andromeda">Andromeda</option>
                                    <option value="Sombrero">Sombrero</option>
                                    <option value="Pinwheel">Pinwheel</option>
                                    <option value="Tadpole">Tadpole</option>
                                    <option value="Somewhere else...">{t(newPlanetTitles.somewhereElse)}</option>
                                </Field>
                                <ErrorMessage name="galaxyName" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="diameter">
                                    {t(newPlanetTitles.diameter)}
                                </label>
                                <Field
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="diameter"
                                    name="diameter"
                                />
                                <ErrorMessage name="diameter" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="distance">
                                    {t(newPlanetTitles.distance)}
                                </label>
                                <Field
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="distance"
                                    name="distance"
                                />
                                <ErrorMessage name="distance" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yourName">
                                    {t(newPlanetTitles.yourName)}
                                </label>
                                <Field
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="yourName"
                                    name="yourName"
                                />
                                <ErrorMessage name="yourName" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    {t(newPlanetTitles.yourEmail)}
                                </label>
                                <Field
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="email"
                                    name="email"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                {t(newPlanetTitles.submitTitle)}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default NewPlanet;
