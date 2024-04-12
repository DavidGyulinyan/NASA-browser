import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormData } from '../../Models/NewPlanetTypeModel';

const validationSchema = Yup.object().shape({
    planetName: Yup.string().min(5, 'Planet name must be at least 5 characters').required('Planet name is required'),
    galaxyName: Yup.string().oneOf(
        ['Milky Way', 'Messier 83', 'Andromeda', 'Sombrero', 'Pinwheel', 'Tadpole', 'Somewhere else...'],
        'Invalid galaxy name'
    ).required('Galaxy name is required'),
    diameter: Yup.number().required('Diameter is required').positive('Diameter must be positive'),
    distance: Yup.number().required('Distance is required').positive('Distance must be positive'),
    yourName: Yup.string().required('Your name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
});

const NewPlanet: React.FC = () => {
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
                <div className='text-center text-xl font-bold mb-4'>If you find a new planet, you can add it to our catalog (reactive forms demo)</div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="planetName">
                                    Planet Name
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
                                    Galaxy Name
                                </label>
                                <Field
                                    as="select"
                                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    id="galaxyName"
                                    name="galaxyName"
                                >
                                    <option value="">Select a galaxy...</option>
                                    <option value="Milky Way">Milky Way</option>
                                    <option value="Messier 83">Messier 83</option>
                                    <option value="Andromeda">Andromeda</option>
                                    <option value="Sombrero">Sombrero</option>
                                    <option value="Pinwheel">Pinwheel</option>
                                    <option value="Tadpole">Tadpole</option>
                                    <option value="Somewhere else...">Somewhere else...</option>
                                </Field>
                                <ErrorMessage name="galaxyName" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="diameter">
                                    Diameter(km)
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
                                    Distance(km)
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
                                    Your Name
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
                                    Email
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
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default NewPlanet;
