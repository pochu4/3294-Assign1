MDIA 3294 Web Scripting 2 - Assignment 1

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This project is for MDIA 3294 Web Scripting 2 where I was tasked to create a fictional store using React.js and incorporating 3 components. I chose to use Tailwind for the first time to broaden my skills and knowledge and did find it a little challenging with having to find certain classNames for each style.

1. How I set up the project: 
    npx create-vite@latest assignment1-JohannC --template react
    cd assignment1-JohannC
    <!-- Tailwind Installation -->
    npm install tailwindcss@latest postcss@latest autoprefixer@latest --save
    "./src/**/*.{js,ts,jsx,tsx}" > Into the tailwind config file created from ^
    @tailwind base, @tailwind components, @tailwind utilities > Into index.css
    npm install @reacticons/ionicons --save
    npm install
    npm run dev

Reopening the project consisted of only, npm run dev in the terminal. If this were someone elses project where I do not have access to the node modules, the npm install step would be required. 


In the catalogue.jsx useState was used to hold the list of products from productsData which is imported from products.json.
Map was used to run the array and go through each product.
The key data is to hold each unique product's data.

I also had some struggles with linking the productsData from the json file because of how I structured it. Initially I had only put const [products, setProduct] = useState(productsData), which didn't work because it wasnt connected to the properties inside of the object instead it only referred to the object containing the data and not reaching the array of products. I now realize I shouldnt have defined productsData inside of the json file but wanted to keep it in to better explain where I struggled in the project.

Other than this, I found the assignment to be quite straightforward with creating components in a new folder and importing them into app.jsx for referencing.


10/11/2024
- Unfamiliarity with Tailwind
- Trouble building responsive navbar which led me to watching a few youtube videos.

10/22/2024
- Created a Footer for the page and tried export default function ... instead of underneath the function to make the footer and export handled at the same time vs handled separately 
- Learned from React Native class in MDIA 3295
