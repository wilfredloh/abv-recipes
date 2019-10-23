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
      let newRecipe = request.body;
      let x = await db.recipes.createRecipe( newRecipe );
      response.send(x);
    } catch (error) {
      console.log('error in controller');
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
    getIngredients,
    getIngredientsFromRecipe,
    getInstructions,
    createRecipe,
  }
};
