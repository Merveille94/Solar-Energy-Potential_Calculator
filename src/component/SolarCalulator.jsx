import React, { useState } from 'react';
import Marquee from "react-fast-marquee";

const SolarCalculator = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [apiKey, setApiKey] = useState(''); // State for user-provided API key
    const [energyOutput, setEnergyOutput] = useState(null);
    const [error, setError] = useState('');

    const calculateSolarPotential = async () => {
        if (!latitude || !longitude || !apiKey) {
            setError('Please enter latitude, longitude, and your API key.');
            return;
        }

        try {
            const response = await fetch(
                `https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=${apiKey}&lat=${latitude}&lon=${longitude}`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch solar data. Please check your API key and coordinates.');
            }

            const data = await response.json();
            console.log(data); // Log the entire response for debugging

            // Accessing annual solar radiation
            const averageDNI = data.outputs.avg_dni.annual; // Direct Normal Irradiance
            const averageGHI = data.outputs.avg_ghi.annual; // Global Horizontal Irradiance

            if (averageDNI !== undefined) {
                setEnergyOutput({
                    dni: averageDNI,
                    ghi: averageGHI,
                });
                setError('');
            } else {
                throw new Error('Data not available for the specified location.');
            }
        } catch (err) {
            setError(err.message);
            console.error(err); // Log the error for debugging
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Solar Energy Potential Calculator
                </h1>
                <p className="text-sm text-gray-600 mb-4 text-center">
                    To use this calculator, you will need an NREL API key.
                    You can get one by signing up at the{' '}
                    <a
                        href="https://developer.nrel.gov/signup/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        NREL Developer Network
                    </a>.
                </p>
                <div className="mb-4">
                    <label className="block text-gray-700">API Key:</label>
                    <input
                        type="password" // Masking the input as password type
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Enter your NREL API key"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Latitude:</label>
                    <input
                        type="text"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Enter latitude"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Longitude:</label>
                    <input
                        type="text"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Enter longitude"
                    />
                </div>
                <button
                    onClick={calculateSolarPotential}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                    Calculate
                </button>

                {error && (
                    <p className="mt-4 text-red-500 text-center">{error}</p>
                )}

                {energyOutput && (
                    <div className="mt-4 text-green-500 text-center">
                        <p>
                            Estimated Annual DNI: {energyOutput.dni.toFixed(2)} kWh/m²
                        </p>
                        <p>
                            Estimated Annual GHI: {energyOutput.ghi.toFixed(2)} kWh/m²
                        </p>
                    </div>
                )}
                <div className="mt-6 text-sm text-gray-600 text-center">
                    <p><strong>DNI:</strong> Direct Normal Irradiance is the solar radiation received per unit area by a
                        surface that is always held perpendicular to the rays coming from the sun.</p>
                    <p><strong>GHI:</strong> Global Horizontal Irradiance is the total solar radiation received per unit
                        area by a horizontal surface.</p>
                    <br/>
                    <Marquee>
                          Returns only various types of solar data for US locations for now. will be working on an update soon!!!
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default SolarCalculator;
