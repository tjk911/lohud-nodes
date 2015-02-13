<!DOCTYPE html>
<html>
  <head>
    <title>Mamaroneck</title>
    <meta http-equiv="Content-Type" content="text/html"> <meta name="viewport" content="initial-scale=0.5, maximum-scale=1, minimum-scale=0.2"/> 
    <!--[if lt IE 9]><script type="text/javascript" src="excanvas.js"></script><![endif]-->
    <link rel="shortcut icon" href="http://www.gannett-cdn.com/sites/lohud/images/favicon.png">
    <link rel="stylesheet" href="css/foundation.css" />
    <link rel="stylesheet" href="http://data.lohud.com/maps/css/base.css" />
    <link rel="stylesheet" href="css/custom.css" />
    <script src="js/vendor/modernizr.js"></script>
    <script src="js/springy.js"></script>
    <script src="js/vendor/jquery.js"></script>
    <script type="text/javascript" src="js/cytoscape.js"></script>
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
  <div id="mainWindow" data-dojo-type="dijit.layout.BorderContainer" data-dojo-props="design:'headline',gutters:false" style="width:100%; height:100%;">

     <!-- PROJECT HEAD -->
    <div id="header" class="head-wrap" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="region:'top'">
      <h2>MAMARONECK WHAT WHAT</h2>

      <h2><a href="https://twitter.com/share" class="twitter-share-button" data-url="#" data-text="#" data-via="lohud" data-hashtags="lohud">Tweet</a>
      <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script> 
      <div class="fb-like" data-href="#" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div></h2>
    </div>
    <div id="cy"></div>
    <?php include('page/mainmodal.html') ?>
  </div>
  <div id="main-footer">
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