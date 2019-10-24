module.exports = (db) => {

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
          response.send(recipes);
        }
      }
    });
  };

  let getImages = (request, response) => {

    db.recipes.getAllImages((error, images) => {
 
      if (error) {
        console.error('error getting images', error);
        response.status(500);
        response.send('server error');

      } else {
        
        if( images === null ){
          response.status(404);
          response.send('not found');

        }else{
          response.send(images);
        }
      }
    });
  };

  let getImagesFromRecipe = (request, response) => {

    let recipeID = request.params.id;

    db.recipes.getImagesfromRecipe( recipeID, (error, images) => {
 
      if (error) {
        console.error('error getting images', error);
        response.status(500);
        response.send('server error');

      } else {
        
        if( images === null ){
          response.status(404);
          response.send('not found');

        }else{
          response.send(images);
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
          response.send(ingredients);
        }
      }
    });
  };

  let getInstructions = (request, response) => {

    let recipeID = request.params.id;
    db.recipes.getInstructions( recipeID, (error, ingredients) => {
 
      if (error) {
        console.error('error getting ingredients', error);
        response.status(500);
        response.send('server error');

      } else {
        
        if( ingredients === null ){
          response.status(404);
          response.send('not found');

        }else{
          response.send(ingredients);
        }
      }
    });
  };

  let createRecipe = async function (request, response) {

    try{
      let recipe = request.body;
      let ingredients = recipe.ingredients;
      let images = recipe.images;
      let instructions = recipe.instructions;

      let recipeID = await db.recipes.saveRecipe( recipe );

      for(let i = 0; i< images.length ; i++) {
        let doneImg = await db.recipes.saveImages( recipeID, images[i]);
      }
      for(let i = 0; i< ingredients.length ; i++) {
        let doneIngr = await db.recipes.saveIngredients( recipeID, ingredients[i].id);
      }
      for(let i = 0; i< instructions.length ; i++) {
        let doneInstr = await db.recipes.saveInstructions( recipeID, instructions[i]);
      }
      response.send('OK');
    } catch (error) {
      console.log('error in controller createRecipe', error);
    }
  };

  let deleteRecipe = (request, response) => {

    console.log('in delete recipe');

    let recipeID = request.params.id;
    db.recipes.deleteRecipe( recipeID, (error, recipe) => {
 
      if (error) {
        console.error('error getting recipe', error);
        response.status(500);
        response.send('server error');

      } else {
        
        if( recipe === null ){
          response.status(404);
          response.send('not found');

        }else{
          response.send(recipe);
        }
      }
    });
  };

  let getRecipeWithIng = async (request, response) => {

    console.log('in delete recipe');

    let recipe = await db.recipes.recipeWithIng();
    
    response.send(recipe)
  };

  return {
    getRecipes,
    getImages,
    getImagesFromRecipe,
    getIngredients,
    getIngredientsFromRecipe,
    getInstructions,
    createRecipe,
    deleteRecipe,
    getRecipeWithIng
  }
};
