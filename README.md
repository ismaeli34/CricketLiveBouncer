# CricketLiveBouncer

This project is a full-stack web application developed using Angular (frontend) and Spring Boot (backend) that provides real-time cricket data, including live scores, match results, and the points table of ongoing tournaments.

The backend employs web scraping techniques to extract up-to-date information from publicly available sports websites. The scraped data is processed and exposed via RESTful APIs built in Spring Boot, while the Angular frontend offers a clean, user-friendly interface to display the information dynamically.

Key Features:

Live match scores updated in near real-time.

Results for completed matches with detailed scorecards.

Tournament points table with team standings and stats.

Scheduled background tasks for periodic data scraping and updates.

Technologies Used:

Frontend: Angular, TypeScript, HTML/CSS

Backend: Spring Boot, Java, Jsoup (for web scraping)

Others: REST APIs, Scheduled Tasks, JSON
