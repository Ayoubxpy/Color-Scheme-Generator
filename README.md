# Color Scheme Generator

A simple and elegant web application that allows you to generate color schemes based on a seed color. Built with vanilla HTML, CSS, and JavaScript, this project leverages [TheColorAPI](https://www.thecolorapi.com/) to fetch and display beautiful color palettes dynamically.

 
<img width="1920" height="960" alt="image" src="https://github.com/user-attachments/assets/1c649ad2-39a3-493b-9b3a-690751894e8d" />


## Features

-   **Interactive Color Picker**: Choose any seed color using a native color input.
-   **Multiple Scheme Modes**: Select from various color harmony modes like Monochrome, Analogic, Complement, and Triad.
-   **Dynamic Palette Generation**: Click the "Get Color Scheme" button to make a live request to TheColorAPI.
-   **Visual Display**: The application displays a clean, five-column layout of the generated colors.
-   **Hex Code Display**: Each color swatch is accompanied by its corresponding hex value.
-   **Responsive Design**: The layout is fully responsive and works well on both desktop and mobile devices, using modern CSS and relative units (`rem`, `em`).
-   **Modern Dark Theme**: A clean, modern, and accessible dark-themed interface.

## Technologies Used

-   **HTML5**: For the structure of the application.
-   **CSS3**: For styling and layout, including modern features like Flexbox.
-   **Vanilla JavaScript (ES6+)**: For handling user input, making API requests with `fetch`, and dynamically manipulating the DOM.
-   **[TheColorAPI](https://www.thecolorapi.com/)**: As the external API for generating color schemes.

## How to Use

To run this project locally:

1.  Clone the repository or download the files.
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Navigate to the project directory.
3.  Open the `index.html` file in your favorite web browser.

That's it! You can now start generating color schemes.

## What I Learned

This project was a fantastic exercise in connecting a frontend interface to a third-party API. Key takeaways include:

-   Making API requests using the `fetch` API.
-   Handling asynchronous JavaScript with Promises (`.then()`).
-   Manipulating the DOM to display data returned from an API.
-   Structuring and styling a responsive layout with Flexbox.
-   Implementing a clean and modern UI/UX with a dark theme.

## Acknowledgments

-   This project was inspired by a challenge from the **[Scrimba](https://scrimba.com/)** fullstack development course.
-   A big thank you to **[TheColorAPI](https://www.thecolorapi.com/)** for providing a free and easy-to-use API for color generation.
