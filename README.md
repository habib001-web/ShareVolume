# Project Overview
This application fetches and displays the outstanding shares for Advanced Micro Devices (AMD) from the SEC API, with the ability to dynamically change to other companies based on their CIK.

## Features
- Fetches data from the SEC API.
- Displays max and min shares outstanding with fiscal years.
- Dynamically updates content based on CIK query parameter.

## Setup Instructions
1. Clone the repository or download the required files.
2. Open `index.html` in a web browser.

## Usage Guide
To view outstanding shares for AMD, simply open `index.html`. 
To view information for other companies, append the CIK to the URL, e.g., `index.html?CIK=0001018724`.

## Code Structure
- `index.html`: The main HTML structure of the application.
- `styles.css`: Styles for the visual layout.
- `script.js`: Functionality to fetch and manipulate data from the SEC API.

## License
MIT