# :books: LOOK FOR A BOOK

## :open_book: OVERVIEW
Date: November 2021\
Developer(s): Ashneet Rathore, Michelle Prasouvo, Henry Reyes\
Mentored by Aaron Chen

Look For A Book is a full-stack web application that allows users to search for books by title and view key details, such as cover image, synopsis, and author. The app was developed in a 12-hour time span as a submission for the ZotHacks beginner-friendly hackathon hosted at UCI.

**Tech Stack** | Python, Flask, HTML, CSS, JavaScript, Google Books API\
For more details, see [Architecture](#classical_building-architecture)

## :film_strip: DEMO
![Demo](demo.gif)

## :classical_building: ARCHITECTURE
The application backend is implemented in **Python** using the **Flask** framework. Flask handles all incoming search requests from the users, defines URL routes (`/` for the home page and `/search` for handling search queries), and manages the flow of the data. When a user submits a search query, Flask receives it via the appropriate route, fetches book data from the **Google Books API**, and processes the relevant details (title, author, synopsis, cover image, rating on Google Books, page count, and publication date) into a structured format.

The frontend is built with **JavaScript**, **HTML**, and **CSS**, and uses Flask with **Jinja2 templating** to render dynamic content. First, JavaScript handles the submission of the search query by capturing user input and redirecting the browser to the `/search` route. Flask then passes the processed book data to Jinja2, which dynamically injects it into the HTML template for **server-side rendering**. Finally, the fully rendered HTML page is sent back to the browser, which displays the results immediately. The app was originally deployed on **Heroku** during the hackathon event, but it is no longer live - it can be run locally instead.

## :open_file_folder: PROJECT FILE STRUCTURE
```bash
LookForABook/
│── app/
│   ├── main.py            # Launches Flask backend, fetches data from Google Books API, and renders frontend for display
│   ├── static/
│   │   │── searchbar.js   # Processes input and sends query to backend
│   │   └── mainpage.css   # Styles the webpage appearance
│   └── templates/         
│       └── index.html     # Renders the Flask frontend
│── requirements.txt       # Contains external dependencies
│── .gitignore             # Excludes files and folders from version control
└── demo.gif               # GIF showing the book searching demo
```

## :hammer: CONFIGURATION
**1. Clone the repository**
```bash
git clone https://github.com/ashneetrathore/LookForABook.git
```

**2. Install dependencies**
```bash
cd LookForABook
pip install -r requirements.txt
```

## :rocket: EXECUTION
Launch a local Flask web server
```bash
cd app
python3 main.py
```

Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser to use the book searcher.

## :wrench: TRY IT OUT
1. After opening the application in your browser, enter the title of a book into the search bar and click the search icon or press `Enter`.
2. Books matching the inputted title will be displayed. Multiple entries may appear for the same title due to different editions or volumes.