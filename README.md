## 🏀 NBA Top 75 Players Web App — Project Explanation

This project is a dynamic web application that highlights the NBA’s Top 75 players, featuring their key career statistics such as points, rebounds, assists, and win shares.

The goal was to create an interactive, data-driven website that displays player information in a clean, modern, and responsive design. The project combines data cleaning, front-end development, and JavaScript logic to deliver an experience that’s both educational and visually appealing.

🔧 How It Works

The website loads player data from a JSON file that was created by cleaning and transforming a raw CSV dataset.
Each player’s information — including name and career averages — is rendered dynamically into a grid of player cards using JavaScript.

When the site loads:

The app fetches data from players.json.

It loops through each player object and generates an HTML card containing their name and stats.

The cards are displayed in a responsive grid layout using CSS Grid and Bootstrap.

This allows the site to automatically adjust its design for different screen sizes — whether it’s viewed on a desktop, tablet, or mobile device.

## 🧰 Technologies Used

HTML5 – for structuring content

CSS3 / Bootstrap 5 – for styling and responsive layout

JavaScript (ES6) – for rendering data dynamically

Python – for cleaning and converting the original CSV data into JSON

JSON – for storing player data in a structured, reusable format

## 🧹 Data Preparation

Before building the web interface, a Python script was written to clean the raw dataset.
The script:

Removed unnecessary columns and headers from the CSV

Renamed ambiguous column names

Selected only relevant statistics (Points, Rebounds, Assists, Win Shares)

Exported the cleaned dataset as a players.json file

This ensured that the front-end would load consistent, well-structured data.

## 🎨 Design and Layout

The website uses a card-based layout where each player is represented in their own section.
Cards feature:

The player’s name in bold

Key performance statistics listed below

Subtle hover effects and shadows for a modern look

The entire site is fully responsive, so the layout automatically adjusts from multiple columns on desktop to single-column scrolling on mobile.

## 🧠 What the Project Demonstrates

This project demonstrates:

Data cleaning and transformation using Python

Dynamic front-end rendering with JavaScript

Responsive design principles

Working with JSON-based datasets

It showcases both data handling and front-end development skills, showing the full flow of how structured data can be prepared, processed, and displayed in an accessible way.
