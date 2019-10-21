module.exports = (app, db) => {

  const recipes = require('./controllers/recipes')(db);

  // app.get('/recipes/:id', recipes.get);
  // app.get('/api/recipes/:id', recipes.apiget);
  
  app.get('/api/recipes', recipes.getRecipes);
  app.get('/api/ingredients', recipes.getIngredients);
  app.get('/api/recipeIngredients/:id', recipes.getIngredientsFromRecipe);

};
