# Solar Energy Potential Calculator

This is a web application that estimates the potential solar energy production for a given location. The application uses the NREL (National Renewable Energy Laboratory) Solar Data API to retrieve real-time solar radiation data, allowing users to understand the solar potential of their specific geographic area.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Requirements](#requirements)
- [Development Timeline](#development-timeline)
- [Future Updates](#future-updates)
- [License](#license)

## Overview

The Solar Energy Potential Calculator is designed to help individuals and businesses estimate the amount of solar energy they can potentially harness at a given location. By inputting the latitude and longitude, users receive an estimate of annual solar radiation in kilowatt-hours per square meter (kWh/m²).

## Features

- **Real-Time Solar Data**: Integrates with the NREL Solar Data API for accurate and up-to-date solar radiation information.
- **User-Friendly Interface**: Built with React and styled using Tailwind CSS for a responsive and intuitive user experience.
- **Simple Input**: Requires only latitude and longitude to calculate solar potential.

## Installation

1. **Clone the Repository**

   Clone the project to your local machine using the following command:

   ```bash
   git clone https://github.com/yourusername/solar-energy-calculator.git
   cd solar-energy-calculator
   ```

2. **Install Dependencies**

   Install the necessary packages using npm:

   ```bash
   npm install
   ```

3. **Configure Environment**

   Replace `YOUR_NREL_API_KEY` in `SolarCalculator.js` with your NREL API key obtained from the [NREL Developer Network](https://developer.nrel.gov/signup/).

4. **Run the Application**

   Start the development server:

   ```bash
   npm start
   ```

   The application should now be running at `http://localhost:3000`.

## Usage

1. **Enter Location Details**: Input the latitude and longitude of the location you want to analyze.
2. **Calculate Solar Potential**: Click the "Calculate" button to receive an estimate of the annual solar radiation.
3. **View Results**: The estimated solar energy potential will be displayed, providing insight into the feasibility of solar energy production at that location.

## Requirements

- Node.js and npm
- An NREL API key
- A modern web browser for testing

## Development Timeline

This project was initially conceptualized in December 2023 as a C++ application. The web application development began in April 2024 and it's still underway using React and Tailwind CSS to provide a more interactive and accessible interface.

## Future Updates

Planned future updates include:
- **Enhanced Data Visualization**: Add charts and graphs to better visualize solar potential over time.
- **Location Auto-Detection**: Integrate geolocation features for automatic latitude and longitude input.
- **Mobile Optimization**: Ensure a seamless experience across all devices.

## License

This project is licensed under the MIT License.
