## FUNERAL WEBSITE TEMPLATE FILES

## Table of contents

- [Overview](#overview)
    - [Introduction](#introduction)
- [Process + Development](#process-+-development)
    - [HTML + CSS + Tailwind Development](#html-+-css+-tailwind-development)
- [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### Introduction

- Simple, elegant design with muted colors to convey a sense of solemnity and respect. Intuitive layout and easy to navigate, ensuring visitors can find the information they need without difficulty.

## Process + Development

### HTML + CSS + Tailwind Development
- This section shows the code templates for the website.

```bash
# Create folder blueprint
mkdir blueprint
cd blueprint

# Install tailwindcss via npm, and create your tailwind.config.js file.
npm install -D tailwindcss
npx tailwindcss init
npm init -y # updates package.json file
npm i -D daisyui@latest
```

```bash
# create folder build which contains index.html file
mkdir build
cd build
touch index.html
```

```bash
# Create folder src which contains input.css file, inside the file add Tailwind directives to your CSS.
mkdir src
cd src
touch input.css
```

```css
/* Tailwind directives to your CSS. */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```css
/* Add the paths to all of your template files in your tailwind.config.js file. */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"], /*all html files in the build folder*/
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors: {
        primary: '#303D34',
        secondary: '#FFF0E2',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [require("daisyui")],
}
```

```js
// scan your template files for classes and build your CSS in the package.json file.

// locate the scripts
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},

// change the script to the following
"scripts": {
    "blueprint": "npx tailwindcss -i ./src/input.css -o ./build/assets/css/style.css --watch"
},
```

```bash
# run the script in the terminal
npm run blueprint
```

**DO NOT forget to link the style.css file to your index.html file in the build folder.**
**Include a gitignore file with content node_modules, in order not to push the files to github**

**HAPPY CODING**

## Useful Resources
- [Tailwind Website](https://tailwindcss.com/)


## Author

- Momanyi Brian - [Portfolio Website](https://momanyi-brian-portfolio.vercel.app)