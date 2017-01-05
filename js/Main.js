
					var chosenItems = {};
					var listCreated = false;
					var counter = "0";
					
	

					$( document ).ready(function() {
					//localStorage.removeItem("a");

					$("#shoppingLists").on("taphold",function(){
					    $(this).remove();
						var valueItem = $(this).closest("li").prevObject[0].innerText;
						var trimmedTitle = valueItem.trim().substring(1);
						localStorage.removeItem(trimmedTitle);
						$('#shoppingLists').listview('refresh').find('.ui-li-static').removeClass('ui-li-static ui-body-inherit');
					});   
					
					$("#shoppingListsItems").on("click","li", function(){
                       $(this).closest("li").find("h3").toggleClass("checked");
					   
					   if($(this).closest("li").find("input").is(':checked'))
					   {
						  $(this).closest("li").find("input").prop('checked', -false); 
					   }else
					   {
						   $(this).closest("li").find("input").prop('checked', true);
					   }
					   
					  
					});
					
					
					$(".edit").on("click", "span", function() {
		                $(".cross").toggle();
	                 });

					var q = localStorage.getItem("viewShoppingLists");
					if (q!=null) chosenItems = JSON.parse(q);
					appendToList();
					});
					
					
					function deleteShoppingList(obj)
					{
						localStorage.removeItem(obj);
						$('#shoppingLists').listview('refresh').find('.ui-li-static').removeClass('ui-li-static ui-body-inherit');
					}
					

					
					

	/*----------------------------- Shopping Lists ------------------------------------- */
					
					//adding new list
					function appendToList(){

					if ($("#newShoppingList").val()!="")  saveChoice();

					//iterate through the dictionary chosenItems
					$("pageone ul").empty();
					for (var key in chosenItems) {
					listName = chosenItems[key];
					//adding LI items to list

					$('<li onclick="openShoppingList(this)">').append('<a href="#"><h3>' + listName + '</h3></a><a href="#" class="delete" onclick="deleteShoppingList("' + listName + '");">Delete</a>').appendTo('#shoppingLists');

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

						
						var w = localStorage.getItem(selectedShoppingList);
						if (w!=null) {
						addNewItems = JSON.parse(w);
						addShoppingItems();
						}
						
						}

						function addShoppingItems(){
						
						//empty shopping list when adding items
					    $("#shoppingListsItems").empty();

						if ($("#newShoppingListItem").val()!="")  saveItemChoice();

						for (var key in addNewItems) {
						listName = addNewItems[key].split(",")[0];
						quantity = addNewItems[key].split(",")[1];	
						
						//adding LI items to list
												
						 //var checkbox = "<div class='checkBoxLeft'><input type='checkbox' id='item" + counterItems + "' class='box'></div>";
						
						 var checkbox  = "<div class='check checkBoxLeft'>" + "<input type='checkbox' id='item" + counterItems + "' class='box'></div>";
						
						$('<li>').append( checkbox +'<h3 class="itemRight" >' + listName + '</h3><span class="ui-li-count ui-body-inherit">' + quantity + '</span>').appendTo("#shoppingListsItems");

										
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
							
							addNewItems[counterItems] = shoppingListItemAdd + "," + $("#txtQuantity").val() ;
							
							localStorage.setItem(selectedShoppingList,JSON.stringify(addNewItems));
							}


							function backToList()
							{
							$("#" + selectedShoppingList).empty();
							$.mobile.changePage("#viewShoppingLists");

							}
							
							//tick off item for li 
							function tickItems(obj)
					        {
							// $(this).parent().css("background-color", "yellow");
							 alert("Item");
							 $( obj ).prop( "checked", true );
							// $(this).closest("li").find("input").prop( "checked", true );
						    }
							
							function editButton() {
								$(".edit").on("click", "span", function() {
								$(".cross").toggle();
							});
}



							//autocomplete shopping list items
							$( function() {
							var availableTags = [
							 "Asparagus",
       "Broccoli",
       "Carrots",
       "Cauliflower",
       "Celery",
       "Corn",
       "Cucumbers",
       "Lettuce",
       "Mushrooms",
       "Onions",
       "Peppers",
       "Potatoes",
       "Spinach",
       "Squash",
       "Zucchini",
       "Tomatoes*",
       "BBQ sauce",
       "Gravy",
       "Honey",
       "Hot sauce",
       "Jam",
	   "Jelly",
	   "Preserves",
       "Ketchup",
	   "Mustard",
       "Mayonnaise",
       "Pasta sauce",
       "Relish",
       "Salad dressing",
       "Salsa",
       "Soy sauce",
       "Steak sauce",
       "Syrup",
       "Worcestershire sauce",
       "Butter",
	   "Margarine",
       "Cottage cheese",
       "Milk",
       "Sour cream",
       "Whipped cream",
       "Yogurt",
       "Bagels",
	   "Croissants",
       "Buns",
       "Cake",
       "Cookies",
       "Donuts",
       "Fresh bread",
       "Pie",
       "Pita bread",
       "Sliced bread",
       "Antiperspirant",
	   "Deodorant",
       "Bath soap",
	   "Hand soap",
       "Cosmetics",
       "Cotton swabs",
       "Facial cleanser",
       "Facial tissue",
       "Feminine products",
       "Floss",
       "Hair gel",
       "Lip balm",
       "Moisturizing lotion",
       "Mouthwash",
       "Razors",
	   "Shaving cream",
       "Shampoo",
	   "Conditioner",
       "Sunblock",
       "Toilet paper",
       "Toothpaste",
       "Vitamins",
       "Air freshener",
       "Bathroom cleaner",
       "Detergent",
       "Dishwasher soap",
       "Garbage bags",
       "Glass cleaner",
       "Mop head",
	   "Vacuum bags",
       "Sponges",
       "Apples",
       "Avocados",
       "Bananas",
       "Berries",
       "Cherries",
       "Grapefruit",
       "Grapes",
       "Kiwis",
       "Lemons",
       "Melon",
       "Nectarines",
       "Oranges",
       "Peaches",
       "Pears",
       "Plums",
       "Bouillon cubes",
       "Cereal",
       "Coffee",
       "Instant potatoes",
       "Lime juice",
       "Mac & cheese",
       "Olive oil",
       "Packaged meals",
       "Pancake mix",
       "Pasta",
       "Peanut butter",
       "Pickles",
       "Rice",
       "Tea",
       "Vegetable oil",
       "Vinegar",
       "Bacon",
	   "Sausage",
       "Beef",
       "Chicken",
       "Ground beef",
       "Ham",
       "Hot dogs",
       "Lunchmeat",
       "Turkey",
       "Bleu cheese",
       "Cheddar",
       "Cottage cheese",
       "Cream cheese",
       "Feta",
       "Goat cheese",
       "Mozzarella",
       "Parmesan",
       "Provolone",
       "Ricotta",
       "Sandwich slices",
       "Swiss",
       "Flour",
       "Shortening",
       "Sugar",
       "Sugar substitute",
       "Yeast",
       "Catfish",
       "Crab",
       "Lobster",
       "Mussels",
       "Oysters",
       "Salmon",
       "Shrimp",
       "Tilapia",
       "Tuna",
       "Basil",
       "Black pepper",
       "Cilantro",
       "Cinnamon",
       "Garlic",
       "Ginger",
       "Mint",
       "Oregano",
       "Paprika",
       "Parsley",
       "Red pepper",
       "Salt",
       "Vanilla extract",
       "Beer",
       "Tonic",
       "Champagne",
       "Gin",
       "Juice",
       "Mixers",
       "Red wine",
	   "White wine",
       "Rum",
       "Saké",
       "Soda pop",
       "Sports drink",
       "Whiskey",
       "Vodka",
       "Baby food",
       "Diapers",
       "Formula",
       "Lotion",
       "Baby wash",
       "Wipes",
       "Cat food",
	   "Cat Treats",
       "Cat litter",
       "Dog food",
	   "Dog Treats",
       "Flea treatment",
       "Pet shampoo",
       "Aluminum foil",
       "Napkins",
       "Non-stick spray",
       "Paper towels",
       "Plastic wrap",
       "Freezer bags",
       "Wax paper",
							];
							$( "#newShoppingListItem" ).autocomplete({
							source: availableTags
							});
							} );
							
	$( document ).ready(function() {

	 $('.delete').click(function(obj){
        // localStorage.removeItem(obj);
		  $('#shoppingLists ul li.selected').remove()
    });

   // This button will increment the value
    $('.qtyplus').click(function(e){
    
     		  var qty = $(".qty").val();
    
          if(qty => 1){
	          $(".qtyminus").removeClass("qtyminusGrey");
          }
    
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(1);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
    		  var qty = $(".qty").val();
          if(qty <= 2){
          $(".qtyminus").addClass("qtyminusGrey");
          }
    
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 1) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(1);
        }
    });
    
    var qty = $(".qty").val();
    
    if(qty < 2)
		{$(".qtyminus").addClass("qtyminusGrey");} 
	
	});

	
	
	

			