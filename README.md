# 🧠 Face Recognition Brain

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Built%20with-Vite-orange?logo=vite)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)


Front-end for the **Smart Brain app** built with **React (Vite)** and designed to connect with the Node.js + Express backend.  
Users can sign in, submit image URLs, and view detected faces returned from the API via the backend service.  

The interface is clean, fully responsive, and enhanced with a **particles background**, a **3D tilt logo**, and **Tachyons CSS**.


**Backend Repository:** [SmartBrain API (Node.js + Express)](https://github.com/PedroTeixeira2308/Smart-Brain-API.git)


## Tech Stack

- **React.js** (Class Components)
- **Vite** (Development + Build Tool)
- **[Tachyons CSS](https://tachyons.io/)** (utility-first styling)
- **[React Tilt](https://www.npmjs.com/package/react-parallax-tilt)** (3D logo animation)
- **[Particles BG](https://www.npmjs.com/package/particles-bg)** (interactive background)
- **JavaScript (ES6+)**
- **HTML5 / CSS3**
- *(Connects to external API via backend service)*
- *(Database integration planned for next phase)*


## Version History

| Version | Description |
|----------|--------------|
| **v1.0.0** | First complete version — Front-end (React) integrated with backend (Node.js + Express) and Clarifai API logic handled server-side |
| **Next** | Implement database integration and persist user data |

---

## What I Learned

- Structuring a React project from scratch using **Class Components**  
- Dividing the UI into **modular, reusable parts** (Navigation, Logo, Rank, Input Form, Face Recognition, etc.)  
- Using **Tachyons** for quick and consistent styling  
- Implementing **React Tilt** for a 3D logo effect  
- Adding **Particles Bg** for animated and dynamic backgrounds  



## Setup

```bash
# Clone the front-end repository
git clone https://github.com/PedroTeixeira2308/Smart-Brain-.git

# Enter the project folder
cd smart-brain

# Install dependencies
npm install

# Start the development server
npm run dev


#Backend (required)

> Make sure the backend server is running locally before testing the front-end.  
> Clone and start it from here:  
> [SmartBrain API (Node.js + Express)](https://github.com/PedroTeixeira2308/Smart-Brain-API.git)

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