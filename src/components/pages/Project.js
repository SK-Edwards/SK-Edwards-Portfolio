import React from 'react';
import '../../styles/project.css';
import project1 from '../../utils/Screenshot 2023-06-10 222346.png';
import project2 from '../../utils/Screenshot 2023-06-10 222908.png'
import project3 from '../../utils/Screenshot 2023-08-05 140942.png'


  function Project() {
    return (
    <article id="projects">
      <div className="projectCard">
      <div className="card-block">
        <h4 className="card-title"> Project #1 Prep Pal </h4>
        <h6 classNAme="card-subtitle text-muted"> Prep Pal, a meal prepping website.</h6>
      </div>
      <img src={project1} alt=""/>
      <div className="card-block">
        <p className="card-text">Prep Pal is a group project that involved the collaboration of team members: Alisa, Shamary, Victor, and Daisha. We used HTML, CSS, and JavaScript to create this website. Additionally, we integrated two APIs. One provided users with the recipe and instructions. The other provided users with the nutritional value of the selected meal. The website was styled using Bootstrap to provide a clean and modern user interface.</p>
        <a href="https://github.com/alisabevers/team-project-1" > GitHub Repo </a>
        <a href="https://alisabevers.github.io/team-project-1/" > Live Website </a>
      </div>
      </div>

      <div className="projectCard">
      <div className="card-block">
        <h4 className="card-title"> Project #2 The Movie Blog</h4>
        <h6 className="card-subtitle text-muted">The Movie Blog is a website that allows users to search for, and comment on their favorite movies!</h6>
      </div>
      <img src={project2} alt=""/>
      <div className="card-block">
        <p className="card-text">When you first land on the webpage, you will be greeted by a homepage with several movie cards. Clicking on any of these takes you to a page with more information on those movies as well as user comments and likes/dislikes

To leave a comment yourself, you will first need to signup then login. In the navbar located at the top of the webpage, click on the button titled login/signup and then proceed to login.

If you are new and need to signup, simply click the link under the login text boxes asking you to signup, and then fill in the information you want to use as your login credentials.

Finally, if you're interested in leaving a comment or like/dislike, after you've logged in, navigate to the movie page you wish to comment on, and click the '+ Add Comment' button. It will prompt you with a text field that you can fill out, and when you're done writing, you can click the 'post comment' button and it will generate in the comments box below.</p>
        <a href="https://github.com/SK-Edwards/The-Movie-Blog" > GitHub Repo </a>
        <a href="https://the-movie-blog.herokuapp.com/movies" > Live Website </a>
       
      </div>
      </div>

      <div className="projectCard">
      <div className="card-block">
        <h4 className="card-title"> Project #3 </h4>
        <h6 className="card-subtitle text-muted">An Alpaca Image Generaor.</h6>
      </div>
      <img src={project3} alt=""/>
      <div className="card-block">
        <p className="card-text">The application allows the user to create and customize an Alpaca image. The user is also able to download the image to use as an avatar if they so choose.</p>
         <a href="https://github.com/SK-Edwards/Alpaca-SKE" > GitHub Repo </a>
         <a href="https://sk-edwards.github.io/Alpaca-SKE/" > Live Website </a>
      </div>
      </div>
      </article>
     

    )
  }
  
  export default Project;
  