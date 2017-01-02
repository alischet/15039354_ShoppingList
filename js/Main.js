
					var chosenItems = {};
					var listCreated = false;
					var counter = "0";
					
	

					$( document ).ready(function() {
					//localStorage.removeItem("viewShoppingLists");

					$("#shoppingLists").on("taphold",function(){
					$(this).hide();
					});   
					
					$("#shoppingListsItems").on("click","li", function(){
                      // $(this).parent().css("background-color", "yellow");
					  // alert("Hello");
					   $(this).closest("li").toggleClass("checked");
					   $(this).closest("li").find("input").toggle(this.checked);
					});
					
					$(".edit").on("click", "span", function() {
		                $(".cross").toggle();
	                 });

					var q = localStorage.getItem("viewShoppingLists");
					if (q!=null) chosenItems = JSON.parse(q);
					appendToList();
					});
					
					

					
					

	/*----------------------------- Shopping Lists ------------------------------------- */
					
					//adding new list
					function appendToList(){

					if ($("#newShoppingList").val()!="")  saveChoice();

					//iterate through the dictionary chosenItems
					$("pageone ul").empty();
					for (var key in chosenItems) {
					listName = chosenItems[key];
					//adding LI items to list

					$('<li onclick="openShoppingList(this)">').append('<a href="#"><h3>' + listName + '</h3></a><a href="#" class="delete">Delete</a>').appendTo('#shoppingLists');

						//<span class="ui-li-count ui-body-inherit">12</span>
						}
						$("#shoppingLists").listview('refresh');
						}

						function saveChoice()
						{
						if (Object.keys(chosenItems).length == "0")
						{
						}
						else
						{
						counter =  parseInt(Object.keys(chosenItems).length) + 1
						}

						shoppingListAdd = $("#newShoppingList").val();
						chosenItems[counter] = shoppingListAdd;
						localStorage.setItem("viewShoppingLists",JSON.stringify(chosenItems));
						}
						
						
						

	/*----------------------------- Shopping List Items  ------------------------------------- */
						
						var selectedShoppingList; 
						var addNewItems = {};
						var counterItems = "0";

						//access shopping List items
						function openShoppingList(obj)
						{
						//show page with selected list
						$.mobile.changePage("#shoppingListItems");

						//refresh items
						$("#newShoppingListItem").val('');
						selectedShoppingList = "";
						$("#lblShoppingListName").empty();


						//name for selected shopping list
						$("#lblShoppingListName").append($(obj).text());
						selectedShoppingList = $(obj).text();

						$("#" + selectedShoppingList).empty();
                        $("#shoppingListsItems").empty();

						//rename 
						//$('#shoppingListsItems').addClass('id').attr('id', $(obj).text());
						//$("#shoppingListsItems").removeClass('id').attr('id', 'shoppingListsItems');

						var w = localStorage.getItem(selectedShoppingList);
						if (w!=null) {
						addNewItems = JSON.parse(w);
						addShoppingItems();
						}else
						{
						//
						}
						}

						function addShoppingItems(){

						if ($("#newShoppingListItem").val()!="")  saveItemChoice();

						for (var key in addNewItems) {
						listName = addNewItems[key];
						//adding LI items to list
						
						var checkbox = "<div class=\"checkBoxLeft\"><input type=\"checkbox\" id=\"item" + counterItems + "\" class=\"box\"></div>";
						
						$('<li>').append(checkbox + '<h3 class="itemRight">' + listName + '</h3>').appendTo("#shoppingListsItems");

						
							}
							$("#shoppingListsItems").listview('refresh');
							}


							function saveItemChoice()
							{
							if (Object.keys(addNewItems).length == "0")
							{
							}
							else
							{

							counterItems = parseInt(Object.keys(addNewItems).length) + 1;
							}

							shoppingListItemAdd = $("#newShoppingListItem").val();
							addNewItems[counterItems] = shoppingListItemAdd;
							localStorage.setItem(selectedShoppingList,JSON.stringify(addNewItems));
							}


							function backToList()
							{
							$("#" + selectedShoppingList).empty();
							$.mobile.changePage("#viewShoppingLists");

							}
							
							//tick off item for li 
							function tickOffItem()
					        {
							 $(this).parent().css("background-color", "yellow");
						    }
							
							function editButton() {
	$(".edit").on("click", "span", function() {
		$(".cross").toggle();
	});
}



							//autocomplete shopping list items
							$( function() {
							var availableTags = [
							"Apples",
							"AppleScript",
							"Asp",
							"BASIC",
							"C",
							"C++",
							"Clojure",
							"COBOL",
							"ColdFusion",
							"Erlang",
							"Fortran",
							"Groovy",
							"Haskell",
							"Java",
							"JavaScript",
							"Lisp",
							"Perl",
							"PHP",
							"Python",
							"Ruby",
							"Scala",
							"Scheme"
							];
							$( "#newShoppingListItem" ).autocomplete({
							source: availableTags
							});
							} );


			