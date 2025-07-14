# Frontend Mentor - Dine Website Challenge Solution

This is my solution to the [Dine Website Challenge](https://www.frontendmentor.io/challenges/dine-restaurant-website-yAt7Vvxt7) on Frontend Mentor. It's a fully responsive, multi-page restaurant website that includes tabbed content and a validated booking form.

## Table of contents

- [Frontend Mentor - Dine Website Challenge Solution](#frontend-mentor---dine-website-challenge-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements
- See correct tabbed content for Family Gatherings, Special Events, and Social Events
- Receive validation messages in the booking form if:
  - Name or Email fields are empty (`"This field is required"`)
  - Email is incorrectly formatted (`"Please use a valid email address"`)
  - Date or Time fields are incomplete (`"This field is incomplete"`)

### Screenshot

![Desktop Screenshot](./preview.jpg)

---

## My process

### Built with

- Semantic HTML5
- Tailwind CSS
- Flexbox & CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) – build tool

### What I learned

This challenge helped me practice responsive design and form validation in a real-world project. I also improved my understanding of handling tabbed content dynamically in React.

Here’s a small snippet of my validation logic:

```js
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```
