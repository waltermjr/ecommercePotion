$(document).ready(function() {
	var obj =
	{
	  "potions": {
	    "1": {
	      "id": 1,
	      "name": "Aging Potion",
	      "image": "aging-potion.png",
	      "price": 29.99,
	      "effect": "Causes the drinker to advance in age",
	      "ingredients": [
	        "Red Wine",
	        "Prune Juice",
	        "Hairy Fungus",
	        "Tortoise Shell",
	        "Caterpillar",
	        "Bat Tongue"
	      ]
	    },
	    "2": {
	      "id": 2,
	      "name": "Bulgeye Potion",
	      "image": "bulgeye-potion.png",
	      "price": 19.99,
	      "effect": "It affects one's eyes, causing them to swell",
	      "ingredients": [
	        "Beetle eyes",
	        "Eel eyes"
	      ]
	    },
	    "3": {
	      "id": 3,
	      "name": "Dragon Tonic",
	      "image": "dragon-tonic.png",
	      "price": 64.99,
	      "effect": "A tonic used to cure sick dragons",
	      "ingredients": [
	        "Eagle Owl feathers",
	        "Peacock feathers",
	        "Giant Purple Toad warts"
	      ]
	    },
	    "4": {
	      "id": 4,
	      "name": "Love Potion",
	      "image": "love-potion.png",
	      "price": 29.99,
	      "effect": "The one who drinks it falls deeply in love with the first person they see",
	      "ingredients": [
	        "Petals from a red rose",
	        "Essence of violet",
	        "Canary flight and down feathers",
	        "Newt eyes"
	      ]
	    },
	    "5": {
	      "id": 5,
	      "name": "Polyjuice Potion",
	      "image": "polyjuice-potion.png",
	      "price": 99.99,
	      "effect": "Allows the drinker to assume the form of someone else",
	      "ingredients": [
	        "Lacewing flies",
	        "Leeches",
	        "Powdered bicorn horn",
	        "Knotgrass",
	        "Fluxweed",
	        "Shredded Boomslang skin"
	      ]
	    },
	    "6": {
	      "id": 6,
	      "name": "Sleeping Draught",
	      "image": "sleeping-draught.png",
	      "price": 29.99,
	      "effect": "Causes the drinker to fall almost instantaneously into a deep but temporary sleep",
	      "ingredients": [
	        "Sprigs of Lavender",
	        "Measures of Standard Ingredient",
	        "Blobs of Flobberworm Mucus",
	        "Valerian sprigs"
	      ]
	    }
	  }
	}

	$(".menuResp").click(function() {
		$(".menu").slideToggle();
	});
	$(".closeMenu").click(function() {
		$(".menu").slideToggle();
	});

	var createElement = function(){

		var newObj = Object.keys(obj.potions);

		for (var i = newObj.length; i >= 1; i--) {

			var elem = 

			$('<li/>',{
				class : 'elements',
				id : obj.potions[i].id,
			})

			.append(
				$('<img/>',{
					'src' : 'images/products_min/' + obj.potions[i].image,
				})
			)
			.append(
				$('<div/>',{
					'class' : 'infoProduct',
				})

				.append(
					$('<span/>',{
						'class' : 'prodName',
						'text' : obj.potions[i].name + " - ",
					})
				)

				.append(
					$('<span/>',{
						'class' : 'prodPrice',
						'text' : obj.potions[i].price,
					})
				)
			)

			.click(function() {
				var data = $(this).attr("id");
				$.window(data);
			});

			$("#listProd").append(elem);
		}
	}

	createElement();

	$.window = function(data){


		var wnd = 
		$('<div/>',{
			class : "containerModal",
		})

		.append(
			$('<div/>',{
				class : "modal",
			})

			.append(
				$('<div/>',{
					class : "closeModal",
					text: "x",
				})

				.click(function(event) {
					$(this).parents('.containerModal').remove();
				})
			)

			.append(
				$('<div/>',{
					class : "contentModal",
				})

				.append(
					$('<div/>',{
						class : "left",
					})

					.append(
						$('<img/>',{
							src : "images/products_max/" + obj.potions[data].image,
						})
					)
				)

				.append(
					$('<div/>',{
						class : "right",
					})

					.append(
						$('<div/>',{
							class : "nameProdModal",
							text : obj.potions[data].name, 
						})
					)

					.append(
						$('<div/>',{
							class : "titlesModal",
							text : "Use/Effects", 
						})
					)

					.append(
						$('<div/>',{
							class : "textModal",
							text : obj.potions[data].effect, 
						})
					)

					.append(
						$('<div/>',{
							class : "titlesModal",
							text : "Ingredients", 
						})
					)

					.append(
						$('<div/>',{
							class : "textModal",
							text : obj.potions[data].ingredients.toString().split(","), 
						})
					)

					.append(
						$('<div/>',{
							class : "titlesModal",
							text : "Price", 
						})
					)

					.append(
						$('<div/>',{
							class : "priceModal",
							text : obj.potions[data].price, 
						})
					)
					.append(
						$('<button/>',{
							text : "ADD TO CART", 
						})
					)
				)
			)
		)

		$('body').append(wnd);
	}
});