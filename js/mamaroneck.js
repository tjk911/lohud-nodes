  
// var nodeedge = $.getJSON('node.json', function(data){
//   console.log('success');
//               $.each(data.nodes,function(i,emp){
//                   $('ul').append('<li>'+emp.firstName+' '+emp.lastName+'</li>');
//               });
//           }).error(function(){
//               console.log('error');
//           });


  $(function(){ // on dom ready


  var cy = cytoscape({
    container: document.getElementById('cy'),

    motionBlur: false,

    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'content': 'data(label)',
          'font-size': '2em',
          'min-zoomed-font-size': 10,
          'text-valign': 'top'
        })
      .selector('edge')
        .css({
          'content': 'data(label)',
          'opacity': 1,
          'min-zoomed-font-size': 10,
          'text-valign': 'center',
          'font-size': '1.5em'
        })
      .selector('node')
        .css({
          'height': 200,
          'width': 200,
          'background-fit': 'cover',
          'border-color': '#C8E1CC',
          'border-width': 1,
          'border-opacity': 0.5
        })
      .selector('edge')
        .css({
          'width': 10,
          'target-arrow-shape': 'triangle',
          'source-arrow-shape': 'circle',
          'line-color': '#ABD7CA',
          'target-arrow-color': '#ABD7CA',
          'source-arrow-color': '#ABD7CA',
          // 'opacity': 0.2,
          'control-point-step-size': 20,
        })
      .selector('#mamaroneck')
        .css({
          'background-image': 'assets/mhs2crop.jpg',
          'shape': 'square',
          'height': '25em',
          'width': '25em',
        })
      .selector('#dfutterman')
        .css({
          'background-image': 'assets/dfuttermanold.jpg'
        })
      .selector('#bmiller')
        .css({
          'background-image': 'assets/bmillerold.jpg'
        })
      .selector('#drussell')
          .css({
            'background-image': 'assets/drussellold.jpg'
          })
      .selector('#mkeefe')
          .css({
            'background-image': 'assets/mkeefeold.jpg'
          })
      .selector('#kdillon')
          .css({
            'background-image': 'assets/kdillonold.jpg'
          })
      .selector('#mdillon')
          .css({
            'background-image': 'assets/mdillonold.jpg'
          })
      .selector('#foxcatcher')
          .css({
            'background-image': 'assets/foxcatcherposter.jpg'
          })
      .selector('#capote')
          .css({
            'background-image': 'assets/capoteposter.jpg'
          })
      .selector('#hustle')
          .css({
            'background-image': 'assets/hustleposter.jpg'
          })
      .selector('#mary')
          .css({
            'background-image': 'assets/maryposter.jpg'
          })
      .selector('#outsiders')
          .css({
            'background-image': 'assets/outsidersposter.jpg'
          })
      .selector('#entourage')
          .css({
            'background-image': 'assets/entourageposter.jpg'
          })
      .selector('#doors')
          .css({
            'background-image': 'assets/doorsposter.jpg'
          })
      .selector('#platoon')
          .css({
            'background-image': 'assets/platoonposter.jpg'
          })
      .selector('#caddyshack')
          .css({
            'background-image': 'assets/caddyshackposter.jpg'
          })
      .selector('#michaelclayton')
          .css({
            'background-image': 'assets/michaelclaytonposter.jpg'
          })
      .selector('#greatsantini')
          .css({
            'background-image': 'assets/santiniposter.jpg'
          })
      .selector('#moneyball')
          .css({
            'background-image': 'assets/moneyballposter.jpg'
          })
      .selector('#crash')
          .css({
            'background-image': 'assets/crashposter.jpg'
          })
      .selector('#birdcage')
          .css({
            'background-image': 'assets/birdcageposter.jpg'
          })
      .selector('#silverplaybook')
          .css({
            'background-image': 'assets/silverplaybookposter.jpg'
          })
      .selector('#fighter')
          .css({
            'background-image': 'assets/fighterposter.jpg'
          })
      .selector('.faded')
            .css({
              'opacity': 0.15,
              'text-opacity': 0
            }),

    elements: 

    // $.getJSON('node.json', function(data){
    //   var nodes = $.each(data.nodes, function(i,emp){
    //       console.log('success'),
    //       console.log(nodes)
    //   });
    // })
    {
      nodes: [
        { data: { id: 'mamaroneck', drid: 'mamaroneckModal', label: 'Mamaroneck High School'} },
        { data: { id: 'dfutterman', drid: 'dfuttermanModal', label: 'Dan Futterman' } },
        { data: { id: 'bmiller', drid: 'bmillerModal', label: 'Bennett Miller' } },
        { data: { id: 'drussell', drid: 'drussellModal', label: 'David O. Russell' } },
        { data: { id: 'mkeefe', drid: 'mkeefeModal', label: "Michael O'Keefe" } },
        { data: { id: 'kdillon', drid: 'kdillonModal', label: 'Kevin Dillon' } },
        { data: { id: 'mdillon', drid: 'mdillonModal', label: 'Matt Dillon' } },
        { data: { id: 'birdcage', drid: 'birdcageModal', label: 'The Birdcage' } },
        { data: { id: 'foxcatcher', drid: 'foxcatcherModal', label: 'Foxcatcher' } },
        { data: { id: 'fighter', drid: 'fighterModal', label: 'The Fighter' } },
        { data: { id: 'silverplaybook', drid: 'silverplaybookModal', label: 'Silver Linings Playbook' } },
        { data: { id: 'hustle', drid: 'hustleModal', label: 'American Hustle' } },
        { data: { id: 'capote', drid: 'capoteModal', label: 'Capote' } },
        { data: { id: 'moneyball', drid: 'moneyballModal', label: 'Moneyball' } },
        { data: { id: 'greatsantini', drid: 'greatsantiniModal', label: 'The Great Santini' } },
        { data: { id: 'michaelclayton', drid: 'michaelclaytonModal', label: 'Michael Clayton' } },
        { data: { id: 'caddyshack', drid: 'caddyshackModal', label: 'Caddyshack' } },
        { data: { id: 'platoon', drid: 'platoonModal', label: 'Platoon' } },
        { data: { id: 'doors', drid: 'doorsModal', label: 'The Doors' } },
        { data: { id: 'entourage', drid: 'entourageModal', label: 'Entourage' } },
        { data: { id: 'outsiders', drid: 'outsidersModal', label: 'The Outsiders' } },
        { data: { id: 'mary', drid: 'maryModal', label: "There's Something About Mary" } },
        { data: { id: 'crash', drid: 'crashModal', label: 'Crash' } },
      ],
      edges: [
        { data: { source: 'mamaroneck', target: 'dfutterman' } },
        { data: { source: 'mamaroneck', target: 'bmiller' } },
        { data: { source: 'mamaroneck', target: 'drussell' } },
        { data: { source: 'mamaroneck', target: 'mkeefe' } },
        { data: { source: 'mamaroneck', target: 'kdillon' } },
        { data: { source: 'mamaroneck', target: 'mdillon' } },
        { data: { source: 'dfutterman', target: 'foxcatcher', label: 'wrote' } },
        { data: { source: 'dfutterman', target: 'capote', label: 'wrote' } },
        { data: { source: 'dfutterman', target: 'birdcage', label: 'starred' } },
        { data: { source: 'bmiller', target: 'foxcatcher', label: 'directed' } },
        { data: { source: 'bmiller', target: 'capote', label: 'directed' } },
        { data: { source: 'bmiller', target: 'moneyball', label: 'directed' } },
        { data: { source: 'drussell', target: 'fighter', label: 'wrote, directed' } },
        { data: { source: 'drussell', target: 'silverplaybook', label: 'wrote, directed' } },
        { data: { source: 'drussell', target: 'hustle', label: 'wrote, directed' } },
        { data: { source: 'mkeefe', target: 'greatsantini', label: 'starred' } },
        { data: { source: 'mkeefe', target: 'michaelclayton', label: 'starred' } },
        { data: { source: 'mkeefe', target: 'caddyshack', label: 'starred' } },
        { data: { source: 'kdillon', target: 'platoon', label: 'starred' } },
        { data: { source: 'kdillon', target: 'doors', label: 'starred' } },
        { data: { source: 'kdillon', target: 'entourage', label: 'starred' } },
        { data: { source: 'mdillon', target: 'outsiders', label: 'starred' } },
        { data: { source: 'mdillon', target: 'mary', label: 'starred' } },
        { data: { source: 'mdillon', target: 'crash', label: 'starred' } },
        { data: { source: 'kdillon', target: 'mdillon', label: 'siblings' } },
        { data: { source: 'mdillon', target: 'kdillon', label: 'siblings' } },



      ]
    }
    ,
    
    layout: {
      name: 'concentric',
      // directed: true,
      padding: 30,
      // nodeOverlap: 20,
      avoidOverlap: true,
      minNodeSpacing: 125,

    },

  }); // cy init
  
  cy.on('tap', 'node', function () {
          try { // your browser may block popups
              /***** GET A REFERENCE TO THE DATA IN DRID ******/
              var modal = $(this.data('drid'));

              /***** THAT REFERENCE IS AN ARRAY, SELECTOR HOLDS THE ACTUAL DRID DATA. NOW WE JUST CALL THE NEW MODAL *****/

              $('#' + modal.selector).foundation('reveal', 'open');
              // window.open( this.data('href') );
          } catch (e) { // fall back on url change
              $(this.data('drid')).foundation('reveal', 'open');
          }
      });

  cy.on('tap', 'node', function(e){
        var node = e.cyTarget; 
        var neighborhood = node.neighborhood().add(node);
        
        cy.elements().addClass('faded');
        neighborhood.removeClass('faded');
      });
      
      cy.on('tap', function(e){
        if( e.cyTarget === cy ){
          cy.elements().removeClass('faded');
        }
      });
  cy.minZoom(1/3);
  cy.maxZoom(1);
  $(document).foundation();
  $(document).on('click tap touchstart', '.reveal-modal-bg', function() {
    return $('[data-reveal]').foundation('reveal', 'close');
}); 
  }); // on dom ready // on dom ready
