$(window).on("load",start);

function start(){
  
        $('#sildeshow').slick({
          
          nextArrow:("#index-slides-right"),
          prevArrow:("#index-slides-left"),
          autoplay:true,
          fade:true
        
        });

}
  


function place(index, obj){
  $("#list").append("<img class='d-block mb-3 w-100' src='"+obj.thumbnail+"'>");
}

function populate(data){
	$("#list").empty();
  $.each(data.results, place);
}

function search(e){

	if (e.which == 13) {
  
  	var keyword = $("#keyword").val();
    
    if (keyword.length < 3) {
    
    	alert("Write longer keyword!");
      
    } else {
    
    	var url = "https://api.creativecommons.engineering/v1/images?format=json&q="+keyword;
			
      $.ajax({
      	url: url,
        success: populate            
      });
      
    }
    
  }
  
}

$(document).on("keyup", "#keyword", search);



function loadpage(e){

  e.preventDefault();
  $("#menu a.active").removeClass("active");
  $(this).addClass("active");

  var href = $(this).attr("href");    
  $("#content").load(href);

}

$(document).on("click", "#menu a", loadpage);

/*$(document).on("click", "#dropdown-list-ourservices", function(){
  $(this).addClass("highlight");
      $(this).siblings().removeClass("highlight");
  $("#content_ourservices").slideDown("slow");
    $("#content_ourservices").siblings().hide("fast");
  
  } )
  
  $(document).on("click", "#dropdown-list-portfolio", function(){
  $(this).addClass("highlight");
      $(this).siblings().removeClass("highlight");
  $("#content_portfolio").slideDown("slow");
    $("#content_portfolio").siblings().hide("fast");
  
  } )
  
  $(document).on("click", "#dropdown-list-aboutus", function(){
   $(this).addClass("highlight");
      $(this).siblings().removeClass("highlight");
  $("#content_aboutus").slideDown("slow");
    $("#content_aboutus").siblings().hide("fast");
  
  } )
  
  $(document).on("click", "#dropdown-list-pricing", function(){
  $(this).addClass("highlight");
      $(this).siblings().removeClass("highlight");
  $("#content_pricing").slideDown("slow");
    $("#content_pricing").siblings().hide("fast");
  
  } )
  
  
  $(document).on("click", "#dropdown-list-blog", function(){
  
  $("#content_blog").slideDown("slow");
    $("#content_blog").siblings().hide("fast");
    
  
  } )


  $(document).on("click", "#dropdown-list-contact", function(){
  
    $("#content_contact").slideDown("slow");
      $("#content_contact").siblings().hide("fast");
      
    
    } )
  
  
  
  $("#navigation_about").click()*/

   