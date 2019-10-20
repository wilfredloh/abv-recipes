module.exports = (app, db) => {

  const recipes = require('./controllers/recipes')(db);

  // app.get('/recipes/:id', recipes.get);
  // app.get('/api/recipes/:id', recipes.apiget);
  
  app.get('/api/recipes', recipes.getRecipes);
};
