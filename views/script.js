// Code goes here

$(document).ready(function(){
  
    var currentPage = 'index';
    var indexPageHandler = function(){
      
      $.ajax({
  
        dataType: 'html',
        url: 'accueilTemplate.html'
      }).done(function(templateData){
        
        $('#pageContainer').html(templateData);
        carouselHandler.init().done(function(data){
        
        $('#carouselContainer').append(data);
        
        $('#indexCarousel .carousel-inner .item:first-child').addClass('active');
        $('#carouselContainer .carousel').carousel({
          
          interval: 3000
        });
      });
      
      }).fail(function(){
        
  
      });
    };
    
    var locationPageHandler = function(){
      
      carouselHandler.locationPageHandler().done(function(templateData){
        
        $('#pageContainer').html(templateData);
        var latlng = new google.maps.LatLng(48.865414, 2.355880);
  
        var mapOptions = {
          zoom: 4,
          center: latlng
        };
        var map = new google.maps.Map($('#googleMapContainer')[0], mapOptions);
      
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'my restaurant'
        });
      });
    };
  
    var menuPageHandler = function(){
      
      carouselHandler.menuPageHandler().done(function(templateHtml){
        
        $('#pageContainer').html(templateHtml);
      
      });
    };
  
    var reservationPageHandler = function(){
      
      
    };
    
    var map = [
    {page: 'index', handler: indexPageHandler},
    {page: 'plats', handler: function(){return 'not integreate'}},
    {page: 'dessert', handler: function(){return 'not integreate'}},
    {page: 'menu', handler: menuPageHandler},
    {page: 'location', handler: locationPageHandler},
    {page: 'reservation', handler:reservationPageHandler}
    ];
    
    $('a.navlink').on('click', function(){
      
      var self = $(this);
      var oldActiveMenu = $('#menuNavigation').find('li.active');
      
      if (oldActiveMenu.length > 0)
      {
        $(oldActiveMenu).removeClass('active');
        //console.info('old active menu ' + $('a', oldActiveMenu).data('type'));
      }
      
      self.parent().addClass('active');
      var pageName = self.data('type');
      
      for (var i = 0; i < map.length; ++i){
        if (map[i].page == pageName){
          
          map[i].handler();
          return ;
        }
      }
    });
    
    $('a[data-type="index"]').trigger('click');
  });