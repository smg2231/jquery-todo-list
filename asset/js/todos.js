let todoText = $(this).val().trim().substring(0, 50);
$("ul").prepend("&lt;li&gt;&lt;span class='left'&gt;&lt;i class='fa fa-trash'&gt;&lt;/i&gt;&lt;/span&gt;  " + 
	todoText + " &lt;span class='right'&gt;&lt;i class='fa fa-pencil'&gt;&lt;/li&gt;");

$(".fa-plus").on("click", function() {
	$("input").slideToggle();
});

$("ul").on("click", "span.text", function(event) {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span.left", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("ul").on("click", "span.right", function(event) {
	var parent = $(this).parent();
	var oldVal = parent.text();
	parent.html("<input type='text' class='editinput'>");
	$(".editinput").keypress(function(e) {
		if(e.which === 13) {
			if($(this).val() === "") {
				parent.html("<span class='left'><i class='fa fa-trash'></i></span><span class='text'>  "+oldVal+"</span><span class='right'><i class='fa fa-pencil'>");	
			}
			else {
				var newVal = $(this).val();
				parent.html("<span class='left'><i class='fa fa-trash'></i></span><span class='text'>  "+newVal+"</span><span class='right'><i class='fa fa-pencil'>");
			}
		}
		e.stopPropagation();
	});
	event.stopPropagation();
});