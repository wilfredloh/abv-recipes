module.exports = (db) => {

  let apiget = (request, response) => {
    const stuff = {
      banana: 'oranges',
      kiwi: 'apple'
    };

    response.send(stuff);
  };

  let get = (request, response) => {

      // use pokemon model method `get` to retrieve pokemon data
      console.log( db )

      db.pokemon.get(request.params.id, (error, pokemon) => {
        // queryResult contains pokemon data returned from the pokemon model
        if (error) {

          console.error('error getting pokemon', error);
          response.status(500);
          response.send('server error');

        } else {

          if( pokemon === null ){

            // render pokemon view in the pokemon folder
            response.status(404);
            response.send('not found');

          }else{

            // render pokemon view in the pokemon folder
            response.render('pokemon/show', { pokemon: pokemon });

          }
        }
      });
  };

  let getRecipes = (request, response) => {

    db.recipes.getAllRecipes((error, recipes) => {
 
      if (error) {
        console.error('error getting recipes', error);
        response.status(500);
        response.send('server error');

      } else {
        
        if( recipes === null ){
          response.status(404);
          response.send('not found');

        }else{
          console.log('got result: ', recipes);
          response.send(recipes);
        }
      }
    });
  };

  let getIngredients = (request, response) => {

    db.recipes.getAllIngredients((error, recipes) => {
 
      if (error) {
        console.error('error getting recipes', error);
        response.status(500);
        response.send('server error');

      } else {
        
        if( recipes === null ){
          response.status(404);
          response.send('not found');

        }else{
          console.log('got result: ', recipes);
          response.send(recipes);
        }
      }
    });
  };
  
  let getIngredientsFromRecipe = (request, response) => {

    let recipeID = request.params.id;
    db.recipes.getIngredientsfromRecipe( recipeID, (error, ingredients) => {
 
      if (error) {
        console.error('error getting ingredients', error);
        response.status(500);
        response.send('server error');

      } else {
        
        if( ingredients === null ){
          response.status(404);
          response.send('not found');

        }else{
          console.log('got result: ', ingredients);
          response.send(ingredients);
        }
      }
    });
  };

  return {
    getRecipes,
    getIngredients,
    getIngredientsFromRecipe
  }
};
