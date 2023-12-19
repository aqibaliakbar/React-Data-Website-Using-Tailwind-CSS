# React + Vite

Live Demo: https://react-data-website1.netlify.app/

1- create-vite react-data-website --template react
2- yarn add tailwindcss postcss autoprefixer
3- Create a tailwind.config.js file: npx tailwindcss init -p
```js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
4- Create a postcss.config.js file: 
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

5- In your src/index.css file, import Tailwind CSS:

/* src/index.css */
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

6- In your src/main.tsx file, import the index.css file:

// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
typed package: yarn add react-typed 
package for icons:  yarn add react-icons --save

---- yarn dev to start


