<!DOCTYPE html>
<html>
  <head>
    <title>Mamaroneck</title>
    <meta http-equiv="Content-Type" content="text/html"> <meta name="viewport" content="initial-scale=0.5, maximum-scale=1, minimum-scale=0.2"/> 
    <!--[if lt IE 9]><script type="text/javascript" src="excanvas.js"></script><![endif]-->
    <link rel="shortcut icon" href="http://www.gannett-cdn.com/sites/lohud/images/favicon.png">
    <link rel="stylesheet" href="css/foundation.min.css" />
    <link rel="stylesheet" href="css/base.css" />
    <link rel="stylesheet" href="css/custom.css" />
    <script src="js/vendor/modernizr.js"></script>
    <script src="js/vendor/jquery.js"></script>
    <script type="text/javascript" src="js/cytoscape.min.js"></script>
    <script type="text/javascript" src="js/mamaroneck.js"></script>
  </head>
  <body class="claro">
  <div id="fb-root"></div>
  <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "http://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>
  <div id='banner'></div>
    <script>
    if(window.self==window.top) {
      var banner = document.getElementById("banner");
      banner.style.backgroundColor = "black"; 
      banner.innerHTML = "<a href='http://www.lohud.com'><img src='http://data.lohud.com/lohud%20logos/site-masthead-logo.png' width='300' /></a><br>";
    }
    </script>

     <!-- PROJECT HEAD -->
    <div id="header" class="head-wrap" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="region:'top'">
      <h2>Six degrees of Mamaroneck High School</h2>

      <h2><a href="https://twitter.com/share" class="twitter-share-button" data-url="#" data-text="#" data-via="lohud" data-hashtags="lohud">Tweet</a>
      <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script> 
      <div class="fb-like" data-href="#" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div></h2>
      <div class="large-12 columns">
        <img src="assets/mhs.jpg" class="circle left" style="padding-right: 10px; padding-top:10px; width:150px;"/>

        <p>The Lower Hudson Valley is getting <a href="http://www.lohud.com/story/news/local/2015/01/15/locals-academy-awards/21801343/">plenty of love</a> at this year's Oscars. Rye's <a href="http://www.lohud.com/story/entertainment/2015/01/15/chance-kelly-american-sniper/21820641/">Chance Kelly</a> gives orders to Bradley Cooper in "American Sniper," Rockland's Bill Murray provides a star turn in the Wes Anderson's "The Grand Budapest Hotel" and Dobbs Ferry students in The Marching Cobras of New York provided the soundtrack to Michael Keaton's underwear-clad stroll through Times Square in "Birdman."</p>

        <p>But there's two other nominees with local connections. Bennett Miller and Dan Futterman got nods for writing and directing "Foxcatcher," respectively. The filmmaking duo graduated from Mamaroneck High School in 1985, but they're far from the only MHS grads in Hollywood.</p>

        <p>"We didn't teach the PACE program to necessarily make these kids go into the arts professionally," says John Fredrickson, who taught theater for the school's Performing Arts Curriculum Experience program for 27 years. "But I've got to tell you, I'm incredibly proud."</p>

        <p>There might be something in the school's water, because, since 2005, Mamaroneck alum have been nominated for nine Academy Awards - in the writing and directing categories alone - though they didn't take any statues home.</p>

        <p>Click on the yearbook photos to see highlights from the filmmakers' careers, and watch their movies' trailers by clicking on the posters.</p>

        <p><i>Twitter: <a href="http://www.twitter.com/kev_incredulous">@kev_incredulous</a></i></p>
      </div>
    </div>
    <div class="large-12 columns"id="cy"></div>
    <?php include('page/mainmodal.html') ?>
  <div class="large-12 columns" id="main-footer">
      <div id="main-footer-inner">
      &copy;2015 lohud.com. All rights reserved. Users of this site agree to the <a target="_top" href="http://static.lohud.com/terms/">Terms of Service</a>, <a target="_top" href="http://static.lohud.com/privacy/">Privacy Notice</a>, and <a target="_top" href="http://static.lohud.com/privacy/#adchoices">Ad Choices</a>
      </div>
  </div>
    <script src="js/foundation.min.js"></script>
    <script>
      // $(document).foundation();
    </script>
  </body>
</html>