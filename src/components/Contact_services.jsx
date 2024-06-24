import { useState } from "react";
import Section from "./Section";
import { brainwaveServices } from "../constants";
import { Gradient } from "./design/Services";
import axios from 'axios';

const Contact_services = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        services: '',
        comment: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? "" : "Name is required.";
        tempErrors.phone = formData.phone ? "" : "Phone number is required.";
        tempErrors.email = formData.email ? "" : "Email is required.";
        tempErrors.services = formData.services ? "" : "Service selection is required.";
        tempErrors.comment = formData.comment.length <= 200 ? "" : "Comment must be 200 words or less.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await axios.post('/api', formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log("response ---------------->", response);
                if (response.status >= 200 && response.status < 300) {
                    setSuccessMessage('✅ Form submitted successfully');
                    setErrorMessage('');
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        services: '',
                        comment: ''
                    });
                } else {
                    setErrorMessage('Error submitting form');
                    setSuccessMessage('');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                    console.error('Response status:', error.response.status);
                    console.error('Response headers:', error.response.headers);
                } else if (error.request) {
                    console.error('Request data:', error.request);
                } else {
                    console.error('Error message:', error.message);
                }
                setErrorMessage('Error submitting form');
                setSuccessMessage('');
            }
        }
    };

    return (
        <Section id="how-to-use">
            <div className="container mx-auto p-6">
                <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                    <div className="relative min-h-[39rem] border border-gray-800 rounded-3xl overflow-hidden shadow-xl bg-gray-900">
                        <div className="absolute inset-0 p-8 bg-gradient-to-br from-purple-950 to-grey-800 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-3xl">
                            <form className="space-y-5 flex flex-col" onSubmit={handleSubmit}>
                                <div className="contactFormPage">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className={`shadow appearance-none border rounded-lg w-full bg-gray-800 bg-opacity-70 text-white leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : 'border-gray-700'}`}
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                                </div>
                                <div className="contactFormPage">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
                                        Ph. Number
                                    </label>
                                    <input
                                        className={`shadow appearance-none border rounded-lg w-full  bg-gray-800 bg-opacity-70 text-white leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? 'border-red-500' : 'border-gray-700'}`}
                                        id="phone"
                                        type="text"
                                        placeholder="Ph. Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
                                </div>
                                <div className="contactFormPage">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                        E-Mail
                                    </label>
                                    <input
                                        className={`shadow appearance-none border rounded-lg w-full  bg-gray-800 bg-opacity-70 text-white leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                                </div>
                                <div className="contactFormPage">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="services">
                                        Select Service
                                    </label>
                                    <select
                                        className={`shadow appearance-none border rounded-lg w-full  bg-gray-800 bg-opacity-70 text-white leading-tight focus:outline-none focus:shadow-outline ${errors.services ? 'border-red-500' : 'border-gray-700'}`}
                                        id="services"
                                        value={formData.services}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Services</option>
                                        {brainwaveServices.map((service, index) => (
                                            <option key={index} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.services && <p className="text-red-500 text-xs italic">{errors.services}</p>}
                                </div>
                                <div className="contactFormPage">
                                    <label className="block text-white text-sm font-bold mb-2 text-start" htmlFor="comment">
                                        Leave a comment here
                                    </label>
                                    <textarea
                                        className={`shadow appearance-none border rounded-lg w-full py-2 px-3 bg-gray-800 bg-opacity-70 text-white leading-tight focus:outline-none focus:shadow-outline ${errors.comment ? 'border-red-500' : 'border-gray-700'}`}
                                        id="comment"
                                        placeholder="Leave a comment here"
                                        value={formData.comment}
                                        onChange={handleChange}
                                        maxLength={200}
                                    />
                                    {errors.comment && <p className="text-red-500 text-xs italic">{errors.comment}</p>}
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                                <div className="flex justify-center mt-4">
                    {successMessage && <p className="text-green-500 text-lg font-bold">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 text-lg font-bold">{errorMessage}</p>}
                </div>
                            </form>
                        </div>
                    </div>

                    <div className="p-4 bg-gray-900 rounded-3xl overflow-hidden lg:min-h-[46rem] bg-gradient-to-br from-purple-950 to-grey-800">
                        <div className="py-12 px-4 xl:px-8"></div>
                        <div className="relative h-[20rem] bg-gray-900 rounded-xl overflow-hidden md:h-[25rem] mb-4 p-6 text-white font-sans opacity-70">
                            <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                                <h1 className="text-4xl font-bold mb-1 text-center">India (IN)</h1>
                                <h3 className="text-2xl mb-4 text-center">
                                A-52, Uttam Nagar East, New Delhi-110059
                                </h3>
                                <p className="text-xl text-center">
                                    info@markletechandmedia.com<br />
                                    +91-798-233-2070 
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[20rem] bg-gray-900 rounded-xl overflow-hidden md:h-[25rem] mb-4 p-6 text-white font-sans opacity-70">
                            <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                                <h1 className="text-4xl font-bold mb-1 text-center">United States (USA)</h1>
                                <h3 className="text-2xl mb-4 text-center">
                                42389, Barbary ST, Fremont, CA 94539, USA
                                </h3>
                                <p className="text-xl text-center">
                                contact@markletech.com <br />
                                +1-628-277-4060
                                </p>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div className="relative h-[30rem] bg-gray-900 rounded-xl overflow-hidden mb-4 p-6 text-white font-sans opacity-70 mt-10 bg-gradient-to-br from-purple-950 to-grey-800">
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                        <h1 className="text-3xl font-bold mb-3 text-center">Elevate Your Digital Footprint: Grow Your Online Presence!</h1>
                        <p className="text-xl text-center mb-4">Still waiting for a Brand Building, Website & Digital marketing agency for your Business? Call Now!! And get the best website development & Digital Marketing & Video Production services for your business.</p>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        >
                            Call Now
                        </button>
                    </div>
                </div>

                <Gradient />
                
            </div>
        </Section>
    );
};

export default Contact_services;
