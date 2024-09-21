  var x = new XMLHttpRequest();

  x.open('GET', 'https://dummyjson.com/recipes?limit=30&skip=10&select=name,image', true);

  x.onload = function () {
          var data = JSON.parse(x.responseText),re = document.getElementById('gett');

          data.recipes.forEach(function(recipe) {
            var y = document.createElement('div');
            y.className = 'recipe';
            var z = document.createElement('h2');
            z.textContent = recipe.name;y.appendChild(z);
            var recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;y.appendChild(recipeImage);re.appendChild(y);
          });
  };

  x.send(); 