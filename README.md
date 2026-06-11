# Solaris Terminal

[Live Demo](https://progritit.github.io/Calculator/)

<img width="1918" height="933" alt="image" src="https://github.com/user-attachments/assets/ecb4a847-906d-4541-9d3a-dedb600179a1" />


A cyber-solar calculator interface built with HTML, CSS, and vanilla JavaScript.

This project was developed as part of **The Odin Project Foundations** curriculum and expanded into a polished browser-based calculator focused on JavaScript logic, application state management, DOM manipulation, keyboard interactions, responsive layout, and a distinctive cyber-solar visual identity.

---

## Preview

The application showcases:

* A responsive calculator interface
* Basic arithmetic operations
* Chained calculations
* Decimal input
* Backspace functionality
* Clear/reset functionality
* Division by zero error handling
* Keyboard support
* Dynamic display updates
* Footer with automatically updated copyright year
* Cyber-solar visual direction
* CSS-generated background and HUD-style decorative elements
* Responsive layout for desktop, tablet, and mobile

---

## Built With

* HTML5
* CSS3
* JavaScript
* Vanilla JavaScript
* DOM manipulation
* Event listeners
* CSS Grid
* Flexbox
* CSS variables
* Responsive design
* Git and GitHub
* GitHub Pages
* VS Code

---

## Features

### Calculator Logic

* Addition, subtraction, multiplication, and division
* Reusable `operate()` function
* Stores the first number, operator, and second number
* Evaluates one pair of numbers at a time
* Supports chained operations such as `12 + 7 - 1 =`
* Prevents invalid consecutive operator evaluations
* Rounds long decimal results to avoid display overflow
* Shows a custom error message when dividing by zero

### Input Controls

* Digit buttons from `0` to `9`
* Operator buttons: `+`, `−`, `×`, `÷`
* Decimal button
* Equals button
* Clear button
* Backspace button
* Keyboard support for numbers, operators, Enter, Backspace, Escape, and decimal input

### Layout & UI

* Semantic HTML structure
* Responsive app layout
* Calculator display with expression/history line
* Styled number, operator, action, and equals buttons
* HUD-inspired intro panel
* Energy/status indicators
* Cyber-solar background built with CSS
* Footer with GitHub and LinkedIn links
* Dynamic current year in the footer

### Design

* Cyber-solar visual identity
* Deep dark carbon and moss-inspired background
* Neon solar yellow, photovoltaic orange, acid green, and plasma cyan accents
* HUD-style interface details
* Solar-grid and energy-panel inspiration
* Sharp, technical UI panels with clipped/chamfered shapes
* Glowing borders, energy bars, and high-contrast interactive states
* Design direction inspired by digital eco-futurism, clean energy systems, and cybernetic interfaces

---

## Project Structure

```plaintext
Solaris-Terminal/
│
├── index.html
├── styles.css
├── script.js
├── README.md
├── LICENSE
│
└── media/
    └── preview.png
```

---

## Design Concept

**Solaris Terminal** was redesigned from a soft solar-inspired calculator into a sharper **cyber-solar calculation interface**.

The project explores a hybrid visual direction combining:

* Dark cybernetic surfaces
* Solar energy accents
* Photovoltaic-inspired grids
* HUD-style interface elements
* Eco-futuristic digital systems
* High-contrast interactive UI states

The goal was to avoid building a generic calculator and instead create a small, memorable interface concept that could belong to a larger visual system.

The cyber-solar direction keeps the optimism and energy of solar-inspired design, but adds a more technical, industrial, and rebellious visual tone. The result is a calculator that feels less like a simple utility and more like a compact computation module inside a futuristic clean-energy terminal.

---

## Key Learning Outcomes

This project helped reinforce:

* Writing reusable JavaScript functions
* Managing calculator state with variables
* Handling user input from buttons
* Adding keyboard support
* Updating the DOM dynamically
* Preventing invalid operations
* Handling edge cases such as division by zero
* Working with decimals and display formatting
* Structuring conditional logic clearly
* Creating responsive layouts with CSS Grid and Flexbox
* Using CSS variables for consistent design
* Creating advanced visual effects with CSS
* Debugging asset paths and script loading behavior
* Improving UI details through small visual refinements
* Refactoring an existing design direction into a stronger visual identity

---

## Challenges Solved

### Calculator State Management

The calculator needed to track the first number, selected operator, second number, current display value, and whether the display should reset after an operation.

### Solution

* Created dedicated state variables
* Used separate functions for number input, operator selection, evaluation, clearing, decimal input, and backspace
* Updated the display based on the current state of the calculator

---

### Chained Operations

The calculator needed to evaluate expressions progressively instead of calculating a full equation at once.

Example:

```plaintext
12 + 7 - 1 = 18
```

### Solution

* Evaluated the first pair of numbers when a second operator is selected
* Stored the result as the new first number
* Continued the next operation using the previous result

---

### Consecutive Operators

Pressing operator buttons repeatedly should not trigger incorrect calculations.

### Solution

* Detected when the display was waiting for the next number
* Replaced the selected operator instead of evaluating an incomplete operation

---

### Display Spacing

The right-aligned display value appeared too close to the display border and slightly clipped some numbers.

### Solution

* Added right padding to the display value
* Adjusted letter spacing for improved readability

---

### Background Asset Integration

An AI-generated background image was visually strong but contained a visible watermark.

### Solution

* Recreated the general atmosphere using CSS gradients, pseudo-elements, grid layers, and decorative orbs
* Removed dependency on the watermarked image
* Improved ownership, performance, and portfolio presentation

---

### Cyber-Solar Refactor

The first visual version was polished but felt closer to a soft solar-punk interface. The project later needed a stronger and more personal design signature.

### Solution

* Refactored the project into a cyber-solar terminal concept
* Reworked the color palette toward deep dark surfaces and neon solar accents
* Added HUD-inspired metadata, energy indicators, and solar-grid background details
* Replaced soft glassmorphism with sharper energy-panel styling

---

## Development Workflow

This project was built through a hands-on learning process using HTML, CSS, and vanilla JavaScript.

AI tools were used as learning and productivity assistants for brainstorming, visual direction, debugging support, and documentation refinement. The final code was reviewed, adapted, tested, and integrated manually, with a focus on understanding the JavaScript logic, DOM interactions, layout structure, responsive behavior, and design decisions behind the implementation.

This workflow reflects a modern approach to learning web development: using available tools strategically while staying responsible for the final result.

---

## Future Improvements

Potential future enhancements:

* Add calculation history
* Add copy result functionality
* Add an Eco Mode toggle
* Add reduced-motion support
* Add animated energy bar states
* Add keyboard press visual feedback
* Add improved accessibility testing
* Add custom favicon
* Add unit tests for calculator logic
* Add optional percentage operation
* Add GitHub Pages deployment link
* Add a final project screenshot

---

## Author

**Clebson Costa**

Full Stack Web Development student.

Current areas of study and practice:

* HTML
* CSS
* JavaScript fundamentals
* DOM manipulation
* Responsive layouts
* Git and GitHub
* UI implementation
* Portfolio-quality projects
* AI-assisted development workflow

Long-term learning path:

* Frontend development
* Backend development
* Databases
* Full stack application architecture

---

## Acknowledgements

* The Odin Project
* ChatGPT for learning support, debugging assistance, and documentation refinement
* Google Gemini for visual direction exploration
* The open web development community

---

## License

This project is open-source and available for educational and portfolio purposes.
