$(window).on("load",start);

function start(){
  
        
        $("#nav a:first").click();
        $(document).on("click","#nav a[href]",nav );

        function nav(e){
          e.preventDefault();
          var href=$(this).attr("href");
          $("#content").load("modules/"+href);
        }

        $("#nav a").fadeTo("fast",0.25);
        $(this).fadeTo("fast",1);


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



