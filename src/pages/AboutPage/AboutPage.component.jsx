import React from "react";
import { motion } from "framer-motion";

import "./AboutPage.styles.scss";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="about-page"
    >
      <h1 className="about-page-title">ABOUT THIS PROJECT</h1>
      <p className="about-page-description">
        This project was built with an effort to design something from scratch
        around a brand that I really love. Being new to functional React (React
        Hooks, Functional Components), I decided to try and challenge myself to
        build a project around this concept and get a feel for it.
        Consequentially, I faced a few challenges but overall, I enjoy
        Functional React much more and am really glad to have went down this
        path.
      </p>
      <p className="about-page-description">
        With that said, the project was challenging because I wanted to add in
        my own design elements. I used a Black and White colour palette for
        simplicity and a modern touch that also allowed the products themselves
        to really pop when being viewed. Each component was designed from
        scratch except for the Swiper seen in the ProductDetailsPage component
        (this package is a God send!) and gave me an opportunity to test my
        design skills. The site is entirely responsive and can be used across
        multiple viewports and devices for a seamless experience. Using a
        combination of media queries in Sass as well as custom hooks that I
        wrote, I was able to create an experience that I really enjoy and I hope
        you do too.
      </p>
      <p className="about-page-description">
        If you have any feedback about this project, feel free to click on my
        name in the footer. This will take you directly to the GitHub repository
        where you can open an issue and we chat about it there. Thank you for
        taking the time to view some of my work and I hope you enjoyed it as
        much as I enjoyed working on it.
      </p>
      <h2 className="about-page-subtitle">CHALLENGES I FACED</h2>
      <p className="about-page-description">
        I faced a few challenges that took me a while to wrap my head around but
        clicked after a few programming sessions. Getting used to using hooks
        and functional components rather than class based components was weird
        at first. I've been used to using component lifecycle methods in class
        based components so recognizing that I could make due without them was
        kind of a headspin. Secondly, using Redux hooks was also fun to learn
        and get used to. In my opinion, ridding myself of mapStateToProps and
        mapDispatchToProps boilerplate was refreshing and I believe this is a
        great path for the React ecosystem to adopt. Funny enough, an item that
        gave me a hard time was naming variables and components. You never
        realize how hard it is to name something until you have to do it
        yourself. With so many components, providing context so that other
        developers who read my code can look through it easily is a superpower
        and I encourage anyone who really wants to improve their craft to take
        naming variables seriously. The variable name "x" isn't going to cut it.
      </p>
      <p className="about-page-description">
        What challenged me the most was how to format the data being fetched
        from Firebase and then also ensuring the data is loaded prior to a
        component rendering and being painted to the DOM. I spent a considerable
        amount of time trying to figure this out and discovered a method that
        worked. Having used Higher Order Components when writing class based
        components I thought I could figure it out rather quickly. However, when
        using functional components I realized I needed to do things differently
        so I encourage you to look through my code and find out how I did this.
        I'm open to feedback as to how I can improve.
      </p>
      <h2 className="about-page-subtitle">
        WHAT I WOULD DO IF I HAD MORE TIME
      </h2>
      <p className="about-page-description">
        I know that this project isn't perfect and that there are so many things
        that can be improved. Here's a small list of what I know I will create
        issues about in GitHub. Pull requests are always welcome!
      </p>
      <ul className="about-page-help-list">
        <li className="help-list-item">
          Use React Lazy to minimize network load and load things in chunks
          rather than one large chunk file.
        </li>
        <li className="help-list-item">
          Use debounce in my useViewport hook so that the Navbar isn't rendering
          numerous times. This will definitely improve performance.
        </li>
        <li className="help-list-item">
          Implement Stripe so that a User can go through a checkout flow using a
          fake credit card.
        </li>
        <li className="help-list-item">
          Create error boundaries and a designed 404 page. Right now, none of
          this exists and it would be great to get it done.
        </li>
        <li className="help-list-item">
          Like all e-commerce stores, having a filtering feature would be
          fantastic. I don't have a lot of time on my hands to work on this but
          if I did, this is a top priority.
        </li>
        <li className="help-list-item">
          Write Snapshot tests, integration tests, and unit tests.
        </li>
        <li className="help-list-item">
          Update the document title to reflect what page the User is looking at.
        </li>
        <li className="help-list-item">
          Add loading spinners to buttons when performing an asynchronous action
          (ie. creating an account or logging in)
        </li>
        <li className="help-list-item">
          Create Sass variables for colours, font sizes, line heights, etc. used
          throughout the project.
        </li>
        <li className="help-list-item">
          Fix package warnings upon install. I spent a lot of time attempting to
          do it and could use a hand getting that cleaned up.
        </li>
      </ul>
    </motion.div>
  );
};

export default AboutPage;
