<!DOCTYPE html>
<html lang="en">

  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Projects</title>
  <meta name="description" content="Hello, I&#39;m Marcus Schimizzi and welcome to my website for all things me. Checkout my resume and some of the things I&#39;ve made. Feel free to connect with me vi...">

  <link rel="stylesheet" href="../assets/main.css">
  <link rel="canonical" href="../projects/">
  <link rel="alternate" type="application/rss+xml" title="The Official Webpage of Marcus J. Schimizzi" href="/feed.xml">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://use.fontawesome.com/861bc918df.js"></script>

  <link href="https://fonts.googleapis.com/css?family=Vesper+Libre|Karma|Roboto" rel="stylesheet">



  <script src="../js/parallax_resize.js"></script>
  <script src="../js/stickynav.js"></script>
</head>


  <body>
    <header>
  <section class="module parallax parallax-1" style="background-image: url(../images/busy.jpg)" >
    <div class="title-container">

        <h1>Projects</h1>

    </div>
  </section>
</header>

<?php include("../includes/nav.php"); ?>

<div class="title-wrapper gold-background">
  <div class="title-inner">
    <h1>What I've Done So Far</h1>
  </div>
</div>

<div class="project-wrapper gold-background" id="frogger">
  <div class="project-inner">
    <p><img class="project-images" src="../images/frogger.jpg" /></p>
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
    <p><img class="project-images" src="../images/ge.jpg" /></p>
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
    <p><img class="project-images" src="../images/10.png" /></p>
    <div class="projects">
      <div class="titles">
       <h3 class="project-title">Sentiment Analysis Web Application</h3>
       <h4 class="project-subtitle">Spring 17 | <a href="https://github.com/schimizzimj/10">View Github Repo</a></h4>
      </div>
      <p class="project-summaries">At a hackathon hosted by Credit Suisse at their office in New York, my team developed a web application that performs sentiment analysis on a company. The project relies on node.js and python (for web scraping). Once a user inputs a stock ticker of their chosen company on the web app, it uses API requests (causes it to be quite slow) to find recent articles about the company. It then tallies occurrences of well-known positive and negative words to compute a ratio indicating recent sentiment on the company.  </p>
    </div>
  </div>
</div>

	<?php include("../includes/footer.php"); ?>
  </body>

</html>
