module.exports = (app, db) => {

  const recipes = require('./controllers/recipes')(db);

  // app.get('/recipes/:id', recipes.get);
  // app.get('/api/recipes/:id', recipes.apiget);
  
  app.get('/api/recipes', recipes.getRecipes);
  app.get('/api/images', recipes.getImages);
  app.get('/api/images/:id', recipes.getImagesFromRecipe);
  app.get('/api/ingredients', recipes.getIngredients);
  app.get('/api/recipeIngredients/:id', recipes.getIngredientsFromRecipe);
  app.get('/api/instructions/:id', recipes.getInstructions);
  
  app.post('/recipes', recipes.createRecipe);
  app.delete('/recipes/:id', recipes.deleteRecipe);
  app.get('/api/recipesIng',recipes.getRecipeWithIng);
};
