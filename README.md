# 🧠 Face Recognition Brain

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-24-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-Framework-black?logo=express)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![Vite](https://img.shields.io/badge/Built%20with-Vite-orange?logo=vite)
![License](https://img.shields.io/badge/License-MIT-lightgrey)


A fullstack face detection web app built with **React**, **Node.js**, and **Express**.  
Users can sign in, submit an image URL, and the app will detect faces using an external image recognition API.  

The interface is clean, fully responsive, and enhanced with a **particles background**, a **3D tilt logo**, and **Tachyons CSS** for fast and consistent styling.  
This project focuses on building a complete fullstack app — from component-based UI to server-side integration.


## Tech Stack

- **React.js** (Class Components)
- **Node.js + Express.js** (backend logic and API)
- **[Tachyons CSS](https://tachyons.io/)** (utility-first styling)
- **[React Tilt](https://www.npmjs.com/package/react-parallax-tilt)** (3D logo animation)
- **[Particles BG](https://www.npmjs.com/package/particles-bg)** (interactive background)
- **JavaScript (ES6+)**
- **HTML5 / CSS3**
- *(Database integration planned for next phase)*


## Version History

| Version | Description |
|----------|--------------|
| **v1.0** | Initial React front-end with structured components, layout and styling |
| **Next** | Connect the backend with Node.js + Express, and start refactoring the front-end to use Functional Components and Hooks |

---

## What I Learned

- Structuring a React project from scratch using **Class Components**  
- Dividing the UI into **modular, reusable parts** (Navigation, Logo, Rank, Input Form, Face Recognition, etc.)  
- Using **Tachyons** for quick and consistent styling  
- Implementing **React Tilt** for a 3D logo effect  
- Adding **Particles Bg** for animated and dynamic backgrounds  
- Planning a fullstack architecture to support future backend and database integration  
- Keeping the codebase clean and organized while iterating quickly  


## Setup

```bash
git clone https://github.com/PedroTeixeira2308/Smart-Brain-.git

cd smart-brain

npm install
npm run dev
```

## Project Structure
```markdown
src/
┣ assets/
┣ Components/
┃ ┣ FaceRecognition/
┃ ┃ ┣ FaceRecognition.css
┃ ┃ ┗ FaceRecognition.jsx
┃ ┣ ImageLinkForm/
┃ ┃ ┣ ImageLinkForm.css
┃ ┃ ┗ ImageLinkForm.jsx
┃ ┣ Logo/
┃ ┃ ┣ brain.png
┃ ┃ ┣ Logo.css
┃ ┃ ┗ Logo.jsx
┃ ┣ Navigation/
┃ ┃ ┗ Navigation.jsx
┃ ┣ Rank/
┃ ┃ ┗ Rank.jsx
┃ ┣ Register/
┃ ┃ ┗ Register.jsx
┃ ┗ SignIn/
┃ ┃ ┗ SignIn.jsx
┣ App.css
┣ App.jsx
┣ index.css
┗ main.jsx
```

## Features

- Sign In and Sign Out components

- Submit image URLs for face detection

- 3D tilt logo built with **`react-parallax-tilt`**

- Particles background using **`particles-bg`**

- Responsive layout built with Tachyons

- Clean, modular structure ready for backend integration


## Author

Pedro Teixeira — Full-Stack Developer (C#, .NET & React)
[GitHub](https://github.com/PedroTeixeira2308) | [LinkedIn](https://www.linkedin.com/in/pedro-teixeira-967615347
)


## License

[MIT](https://choosealicense.com/licenses/mit/)