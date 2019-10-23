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
          // console.log('got result: ', recipes);
          response.send(recipes);
        }
      }
    });
  };

  let getImages = (request, response) => {

    db.recipes.getImages((error, images) => {
 
      if (error) {
        console.error('error getting images', error);
        response.status(500);
        response.send('server error');

      } else {
        
        if( images === null ){
          response.status(404);
          response.send('not found');

        }else{
          // console.log('got result: ', images);
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
          // console.log('got result: ', recipes);
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
          // console.log('got result: ', ingredients);
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
          // console.log('got result: ', ingredients);
          response.send(ingredients);
        }
      }
    });
  };

  let createRecipe = async function (request, response) {
    console.log('@@@@@@@@@@@@@@@@@@@@@$$$####')
    console.log(request.body)
    console.log('@@@@@@@@@@@@@@@@@@@@@')

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
      console.log('error in controller', error);
    }
    
    // db.recipes.createRecipe( newRecipe, (error, recipe) => {

    //   if (error) {
    //     console.error('error getting recipe', error);
    //     response.status(500);
    //     response.send('server error');

    //   } else {
        
    //     if( recipe === null ){
    //       response.status(404);
    //       response.send('not found');

    //     }else{
    //       console.log('got result: ', recipe);
    //       response.send('ok!');
    //     }
    //   }
    // });
  };

  return {
    getRecipes,
    getImages,
    getIngredients,
    getIngredientsFromRecipe,
    getInstructions,
    createRecipe,
  }
};
