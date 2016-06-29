$(function() {

  function showImage(index) {
      var img = $("<img />").addClass('center-block').attr("src", pictures[index].media.m).attr("style", "display: none;").appendTo("#images").fadeIn(1000);
      img.fadeOut(500, function() {
          if(index+1 == pictures.length) {
              return false;
          } else {
              showImage(index+1);
          }
      });
  }


  var catPromise = $.ajax({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    jsonpCallback: 'jsonFlickrFeed',
    dataType: 'jsonp',
    data: {"tags": 'cats', "format": "json"}
  });

  catPromise.then(function(data) {
    pictures = data.items;
    showImage(0);
  })
  // Promise.all([bananaPromise, dogPromise, catPromise]).then(function(data) {
  //   pictures = data.items;
  //   showImage(0);
  // })



});