<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Marcus J. Schimizzi</title>
  <meta name="description" content="Hello, I&#39;m Marcus Schimizzi and welcome to my website for all things me. Checkout my resume and some of the things I&#39;ve made.">

  <link rel="stylesheet" href="./assets/main.css">
  <link rel="canonical" href="./">
  <link rel="alternate" type="application/rss+xml" title="The Official Webpage of Marcus J. Schimizzi" href="/feed.xml">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://use.fontawesome.com/861bc918df.js"></script>

  <link href="https://fonts.googleapis.com/css?family=Vesper+Libre|Karma|Roboto" rel="stylesheet">



<!--   <script src="./js/parallax_resize.js"></script>
 -->  <script src="./js/stickynav.js"></script>
  <script src="./js/loader.js"></script>
</head>

<body onload="myFunction()">
  <div id="loader"></div>
  <div class="wrapper animate-bottom" id="content">
    <header>
      <section class="module parallax parallax-1" style="background: linear-gradient(to right, #D3D3D3, white);" >
        <div class="top-block">
          <div class="avatar">
          </div>
          <div class="title-container" id="top-title">

              <h1 id="name"><span>Hey, I'm</span><br />Marcus</h1>

          </div>
        </div>
      </section>
    </header>

    <div class="nav-wrapper">
    <nav class="site-header">

      <div class="full-nav">

      <a class="site-title" href="/">
        <span class="strikethrough">Marcus J. Schimizzi</span>
      </a>
      <div class="site-nav">
        <ul>
          <li>
            <a class="page-link" href="#projects">
              <span class="strikethrough">Projects</span>
            </a>
          </li>
          <li>
            <a class="page-link" href="#resume">
              <span class="strikethrough">Resume</span>
            </a>
          </li>
        </ul>
      </div>
      </div>

      <div class="mobile-site-nav">
        <div class="mobile-nav-wrapper">
          <a class="page-link" id="mobile-site-title" href="/">Home</a>
          <a class="page-link" href="/projects/index.php">Projects</a>
          <a class="page-link" href="/resume/index.php">Resume</a>
        </div>
      </div>

    </nav>
    </div>

    <div class="featured-projects-wrapper">
      <div class="featured-projects-inner">
        <div class="featured-projects-content">
    	     <h2>Featured Projects</h2>
           <p class="links">
             <a class="featured-project-link" href="./projects#frogger">
               <span class="featured-project-link-text">
                 Frogger Clone
               </span>
               <br>
             </a>
             <a class="featured-project-link" href="./projects#nd_adventure">
               <span class="featured-project-link-text">
                 ND Adventure
               </span>
               <br>
             </a>
             <a class="featured-project-link" href="./projects#10">
               <span class="featured-project-link-text">
                 Sentiment Analysis Web Application
               </span>
               <br>
             </a>
             <a class="featured-project-link" href="./projects#ge">
               <span class="featured-project-link-text">
                 GE Align Lighting Project
               </span>
               <br>
             </a>
           </p>
           <a class="view-all" href="./projects">
             <span class="strikethrough">View all</span>
           </a>
         </div>
      </div>
    </div>

      <header>
    <section class="module parallax parallax-1" id="projects" >
      <!-- style="background-image: url(./images/busy.jpg)" -->
      <div class="title-container">

          <h1>Projects</h1>

      </div>
    </section>
  </header>

  <div class="title-wrapper gold-background">
    <div class="title-inner">
      <h1>What I've Done So Far</h1>
    </div>
  </div>

  <div class="project-wrapper gold-background" id="frogger">
    <div class="project-inner">
      <p><img class="project-images" src="./images/frogger.jpg" /></p>
      <div class="projects">
        <div class="titles">
         <h3 class="project-title">Frogger Clone</h3>
         <h4 class="project-subtitle">Fall 2016 | <a href="https://github.com/schimizzimj/frogger">View GitHub Repo</a></h4>
        </div>
        <p class="project-summaries">Final project for my Fundamentals of Computing course during my sophomore year at the University of Notre Dame. I created a Frogger clone using C++ and a custom graphics library built by our faculty from the X11 library. The game has a very simple menu that launches into gameplay closely replicating the original game. The game keeps going until the player loses all three lives or they make it to the end enough times to fill all of the lilypads.</p>
      </div>
    </div>
  </div>

  <!-- <div class="project-wrapper black-background" id="atowey">
    <div class="project-inner">
      <p><img class="project-images" src="../images/atowey.jpg" /></p>
      <div class="projects">
        <div class="titles">
         <h3 class="project-title">Allison Towey's Online Portfolio</h3>
         <h4 class="project-subtitle">Work in Progress | <a href="https://atowey.github.io">View Site</a></h4>
        </div>
        <p class="project-summaries">This is a project I've been working on for a friend. I'm working on developing a personal website for Allison Towey on which she can showcase her personal accomplishments and academic achievements. The website was created mostly from scratch, using Jekyll to help with templating.</p>
      </div>
    </div>
  </div> -->

  <div class="project-wrapper black-background" id="nd_adventure">
    <div class="project-inner">
      <p><img class="project-images" src="http://res.cloudinary.com/marcusschimizzi/image/upload/v1504123162/871d0e5d3a57b37aa28a5b7cf867fcec_cirncl.png" /></p>
      <div class="projects">
        <div class="titles">
         <h3 class="project-title">ND Adventure</h3>
         <h4 class="project-subtitle">Spring 17 | <a href="https://github.com/schimizzimj/dsproject">View Github Repo</a></h4>
        </div>
        <p class="project-summaries">For the final project in my Data Structures course, I worked with a team of students to develop an RPG/adventure based around the Notre Dame Campus.
          The player takes on the role of a Notre Dame computer science student and has to complete tasks for professors around campus. The game is built using python and the pygame library. </p>
      </div>
    </div>
  </div>

  <div class="project-wrapper gold-background" id="ge">
    <div class="project-inner">
      <p><img class="project-images" src="./images/ge.jpg" /></p>
      <div class="projects">
        <div class="titles">
         <h3 class="project-title">GE Align Lighting Project</h3>
         <h4 class="project-subtitle">Spring 16 | <a href="../documents/gereport.pdf">View Final Report</a></h4>
        </div>
        <p class="project-summaries">For the final project for my Introduction to Engineering course, I worked in a team to use an RGB lightbulb to replicate GE's AM and PM Align bulbs. We worked in association with GE and used MATLAB in order to program our bulb to match the Align ones provided to us. We then gave a demonstation of our project based on a final report we compiled that can be accessed from the above link.</p>
      </div>
    </div>
  </div>

  <div class="project-wrapper black-background" id="10">
    <div class="project-inner">
      <p><img class="project-images" src="./images/10.png" /></p>
      <div class="projects">
        <div class="titles">
         <h3 class="project-title">Sentiment Analysis Web Application</h3>
         <h4 class="project-subtitle">Spring 17 | <a href="https://github.com/schimizzimj/10">View Github Repo</a></h4>
        </div>
        <p class="project-summaries">At a hackathon hosted by Credit Suisse at their office in New York, my team developed a web application that performs sentiment analysis on a company. The project relies on node.js and python (for web scraping). Once a user inputs a stock ticker of their chosen company on the web app, it uses API requests (causes it to be quite slow) to find recent articles about the company. It then tallies occurrences of well-known positive and negative words to compute a ratio indicating recent sentiment on the company.  </p>
      </div>
    </div>
  </div>

  <header>
    <section class="module parallax parallax-1"  id="resume" >
      <!-- style="background-image: url(./images/prog.jpg)"  -->
      <div class="title-container">

          <h1>Resume</h1>

      </div>
    </section>
  </header>
 
    <div class="resume-wrapper">
      <div class="post-content resume">
        <hr />
        <hr />
        <h2 class="anchor" id="Education"> Education:</h2>
          <p>August 2015 - May 2019   University of Notre Dame          Notre Dame, IN<br />
            <em>B.S. in Computer Science;</em>  GPA: 3.525/4.000;  Major GPA: 3.780/4.000</p>

          <p>August 2011 - May 2019   Defiance High School              Defiance, OH<br />
            GPA: 4.00/4.00; Valedictorian</p>

        <hr />
        <hr />

        <h2 class="anchor" id="Work Experience"> Work Experience:</h2>
        <p>August 2017 - Present    Notre Dame Engineering                 
          Notre Dame, IN<br />
          <em>Computer Science Tutor</em></p>
            <ul>
              <li>
                <p>Leads weekly group discussion sessions to facilitate students’ understanding
                  of course content</p>
              </li>
              <li>
                <p>Offers individual tutoring to provide additional help to students in need</p>
              </li>
            </ul>

        <p>May 2017 - Present    <br />
          <em>Freelance Web Developer</em></p>
            <ul>
              <li>
                <p>Uses HTML/CSS/JavaScript to update/develop websites &amp; applications</p>
              </li>
              <li>
                <p>Developed responsive mobile app for client using Ionic framework</p>
              </li>
              <li>
                <p>Works with WordPress themes &amp; plugins to provide customizations for
                  clients’ websites</p>
              </li>
            </ul>

          <p>August 2016 - May 2017    Notre Dame STEM                 
            Notre Dame, IN<br />
            <em>STEM Ambassador</em></p>
              <ul>
                <li>
                  <p>Met with students in need of help, either academically or otherwise, to provide advice and act as a guide</p>
                </li>
                <li>
                  <p>Organized constructive events in order to promote participation in STEM majors</p>
                </li>
              </ul>

          <p>May 2016 - August 2016    Bil-Jax Inc.                 Archbold, OH<br />
            <em>Research &amp; Development Engineering Intern</em></p>
              <ul>
                <li>
                  <p>Conducted various life cycle tests on the different components of industrial boom lifts</p>
                </li>
                <li>
                  <p>Ensured functionality and usability of machine operation software through differing performance tests</p>
                </li>
                <li>
                  <p>Used Herd testing method to assess dependability of battery chargers</p>
                </li>
              </ul>

        <hr />
        <hr />

        <h2 class="anchor" id="Honors &amp; Activities">Honors &amp; Activities:</h2>
        <ul>
          <li>ND Mock Trial Team</li>
          <li>ND Model UN</li>
          <li>Camp Kesem Counselor</li>
          <li>Dean's List Spring '17'</li>
          <li>Welcome Weekend Ambassador</li>
          <li>Dunne Hall Brother/Sister Dorm Commissioner</li>
        </ul>

        <hr />
        <hr />

        <h2 class="anchor" id="Relevant Coursework">Relevant Coursework:</h2>
        <ul>
          <li>Data Structures</li>
          <li>Fundamentals of Computing</li>
          <li>Linear Algebra &amp; Differential Equations</li>
          <li>Systems Programming</li>
          <li>Logic Design</li>
          <li>Theory of Computing</li>
          <li>Computer Architecture</li>
          <li>Programming Paradigms</li>
          <li>Computer Graphics</li>
          <li>Web Applications</li>
        </ul>

        <hr />
        <hr />

        <h2 class="anchor" id="Skills">Skills:</h2>
        <ul>
          <li>MATLAB</li>
          <li>C/C++</li>
          <li>HTML &amp; CSS</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Scheme</li>
          <li>Mobile Development (Ionic)</li>
          <li>Web Scraping</li>
          <li>WordPress</li>
          <li>WebGL</li>
          <li>Bootstrap</li>
        </ul>

        <hr />
        <hr />

        <!-- <h2 class="anchor" id="Interests">Interests:</h2>

        <ul>
          <li>Web Development</li>
          <li>Playing Guitar</li>
        </ul> -->

        <div class="resume-download-mobile">
          <a class="resume-link" href="../documents/resume.pdf">Download PDF</a>
        </div>

      </div>
    </div>

  <div id="footer"></div>
  <div class="spacer"></div>


  <div class="site-footer">

    <div class="title-wrapper">
      <div class="title-inner">
        <h1>Connect with me</h1>
      </div>
    </div>

    <div class="container">
      <div class="block" id="item-1">
        <a href="https://instagram.com/marcusschimizzi">
          <span class="item-content">
            <h2>Instagram</h2>
          </span>
        </a>
        <img class="footer-icon" src="https://res.cloudinary.com/marcusschimizzi/image/upload/v1488528004/icon-instagram_wig3ya.svg">
      </div>

      <div class="block" id="item-2">
        <a href="https://github.com/schimizzimj">
          <span class="item-content">
            <h2>Github</h2>
          </span>
        </a>
        <img class="footer-icon" src="http://res.cloudinary.com/marcusschimizzi/image/upload/v1488527979/icon-github_h2cpnw.svg">
      </div>

      <div class="block" id="item-3">
        <a href="https://www.linkedin.com/in/marcus-schimizzi-56a6229b">
          <span class="item-content">
            <h2>LinkedIn</h2>
          </span>
        </a>
        <img class="footer-icon" src="http://res.cloudinary.com/marcusschimizzi/image/upload/v1488527986/icon-linkedin_s1jn8k.svg">
      </div>

      <div class="block" id="item-4">
        <a href="https://facebook.com/marcus.j.schimizzi">
          <span class="item-content">
            <h2>Facebook</h2>
          </span>
        </a>
        <img class="footer-icon" src="http://res.cloudinary.com/marcusschimizzi/image/upload/v1488527974/icon-facebook_supky9.svg">
      </div>

      <div class="block" id="item-5">
        <a href="https://twitter.com/marcusschimizzi">
          <span class="item-content">
            <h2>Twitter</h2>
          </span>
        </a>
        <img class="footer-icon" src="http://res.cloudinary.com/marcusschimizzi/image/upload/v1488527989/icon-twitter_uv4qkd.svg">
      </div>

      <div class="block" id="item-6">
        <a href="mailto:mschimiz@nd.edu">
          <span class="item-content">
            <h2>Email</h2>
          </span>
        </a>
        <img class="footer-icon" src="http://res.cloudinary.com/marcusschimizzi/image/upload/v1488527982/icon-gmail_q3rpvi.svg">
      </div>
    </div>
  </div>
</div>

</body>
</html>
