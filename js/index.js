let posts= ["bizcowork","clothup","hackerton","youngsan","srn","timekey","unifoxkr","reactmini","snake"];

$( function() {
    for(let i=0; i<posts.length; i++){
      $( "#"+posts[i]+"_dialog" ).dialog({
        autoOpen: false,
        resizable: false,
        modal: true,
        draggable:false,
        width:'auto',
        closeOnEscape: true,
        show: {
          effect: "fade",
          duration: 500,
        },
        hide: {
          effect: "fade",
          duration: 500,
        }
      });
      $( "#"+posts[i]+"_box" ).on( "click", function() {

        $( "#"+posts[i]+"_dialog" ).dialog( "open" );

      });
    }
  }
);
