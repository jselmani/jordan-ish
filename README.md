![Jordan-ish](./public/project-preview-image.PNG)
# Jordan-ish
> This is a project created with mid-level complexity using the React ecosystem.  Loving the Jordan brand, this felt like a project I would really enjoy building.  Using my own design elements and building every component (except Swiper) from scratch to test my design skills.  

---
# 🎯 About
I started this project with the purpose of learning functional React and becoming more familiar with the ecosystem.  I structured this app to be of mid-level complexity that integrated Redux logic to manage state.  Using the Jordan website for inspiration, I looked for an opportunity to make their experience my own.  I put a lot of effort into this project and hope that you enjoy the experience as well.  The site is entirely responsive and can be viewed on different mobile devices, tablets, and laptops and desktop computers.

Your entry to this e-commerce store starts at the homepage where you find Zion Williamson staring right at you.  Scrolling through the page shows you the different collections available to you - Mens, Womens, Air Jordan 1, Basketball, and the infamous SNKRS sub brand of Nike and Jordan.  Alternatively, you can view previews of each collection by clicking on the 'SHOP' button in the Navbar.  When viewing a shoe (there's 23 of them to be exact), if the product has colour variants you can view the variant by hovering over the product card.  For faster development, I limited the variant amount to 2 but can increase it as I continue iterating on the project in my free time.  When clicking on a product card, you are taken to view the products details where you can swipe through the different images to view the product and choose a size before adding to your bag.  Should decide to want to add the product to a favourites list, you need to sign in or sign up to gain access.  After doing so, you can view your favourites and choose a size to add to your cart without having to search through the collection to find your shoe.

In your bag, you can increase the quantity of the shoe(s) you have or remove them entirely. As for the data in the cart and favourites, this is persisted in ```localStorage``` so that it is available to you upon returning to the store.  The session is also saved using Firebase and is checked upon the app mounting to the DOM.  Another note about the app that happens in the background is that data is requested from the server either once or twice depending on the entry point.  If your entry to the application is through the ```/products/:productId``` endpoint, the product document itself will be retrieved from the server and then all data will be requested when entering the ```/shop``` endpoint.  This is done to minimize network load.  Now, if you enter through the ```/shop``` endpoint or ```/shop/:collectionId``` endpoint, all the data will be requested and when viewing a product specifically, the data has already been loaded and is not required to make another network request (except for accessing the images through the Jordan CDN).

Please go ahead and give it a try and let me know if you enjoyed it with a ⭐️, I would really appreciate it.

As always, PR's are welcome.

---
# ▶️ Demo
You can view the demo of this project using my [Vercel](https://jordan-ish.vercel.app) link.

---
# Test Credentials
If you want to log in to view the features entirely, you can use the following credentials:
- Email: testuser@gmail.com
- Password: 12345678

---
# ✨ Features
- ✔️ Responsive and available across multiple viewports and devices 
- ✔️ Use of React, Redux, React Router hooks and creation of custom hooks
- ✔️ User sign in & User sign up using Firebase Email Authentication
- ✔️ Favourites and Cart persistence (local storage)
- ✔️ Swipeable Product images
- ✔️ Custom Jordan logo loading state
- ✔️ Minimized network load
- ✔️ Route animations handled with Framer Motion
- ✔️ Intuitive user flow to access certain features
- ✔️ Window listener to ensure pages are loaded at the top through custom component
- ✔️ Add/Remove/Update cart and favourites lists
- ✔️ Collection previews prior to viewing an entire collection
- ✔️ Use Toasts to display when an action/event has occurred.

---
# 🚀 Technologies
- React
- React Hooks
- React Context API
- React Router
- Redux
- Redux Saga
- Redux Persist
- Reselect
- Firebase
- Sass
- SwiperJS
- Framer Motion
- React Icons
- Vercel
- React Hot Toast

---
# 💀 Challenges I Faced
- Wrapping my head around Functional React after writing code using `Class` components
- Naming many different components properly to provide the appropriate context to what each component does
- Separating concerns into the appropriate location in the applications structure.
- Managing and setting up `JSON` data properly in Firebase to be fetched properly
- Structuring the applications scaffold so that other developers know exactly where to find components, files, etc.

---
# ⏰ What I Would Do If I Had More Time
 - Use React Lazy to minimize network load and load things in chunks rather than one large chunk file.
 - Use debounce in my useViewport hook so that the Navbar isn't rendering numerous times when the viewport size changes
 - Implement Stripe so that a User can go through a checkout flow using a fake credit card.
 - Create error boundaries and a custom designed 404 page.
 - A filtering feature so users can find a specific shoe using certain criteria.
 - Write Snapshot, Integration, and Unit tests.
 - Update the document title to reflect what page the User is currently viewing.
 - Add loading spinners to buttons when performing asynchronous actions (ie. creating an account or logging in).
 - Create Sass variables for colours, font sizes, line heights, etc. use throughout the project.
 - Fix package warnings upon install.

---
# 👨🏻‍💻 Run Locally
### Step 1
`git clone https://github.com/jselmani/jordan-ish`

### Step 2
`cd jordan-ish`

### Step 3
`npm install`

### Step 4
`npm start`

---
# ✅ Requiurements
Before starting, you need to have Git and Node installed on your machine.
