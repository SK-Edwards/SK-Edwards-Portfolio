import React from 'react';
import '../../styles/about.css';
import profilePic from '../../utils/Screenshot 2023-06-11 143424.png';


function About() {
    return (

        <div id="about">
            <img src={profilePic} alt="" />
            <h3>
                 About Me
            </h3>
            <p>I am a software engineer with experience working with NodeJS, MongoDB, HTML5, CSS3, GitHub, MERN, JavaScript, SQL Express, React, and React.js. 
            Software Development , it incorporates and challenges my creativity and my problem-solving abilities.
            I'm still enthusiastically learning other programming languages, frameworks, or principles I can to improve my skills. In my free time i practice the martial art of Jui Jitsu which i enjoy very much and i hope to one day become a black belt.



            </p>
        </div>


    )
};

export default About;