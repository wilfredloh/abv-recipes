/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let saveRecipe = async function (recipe, callback) {

    try {
      const queryString = `INSERT INTO recipes (name, about) VALUES ($1, $2) RETURNING *`;
      const values = [ recipe.name, recipe.about];

      let queryResult = await dbPoolInstance.query(queryString, values);

      if (queryResult.rows.length > 0 ){
        console.log('result: ', queryResult);
        return queryResult.rows[0].id;
      } else {
        return Promise.reject(new Error('querry is null'));
      }
    } catch (error) {
      console.log('error in model SAVE RECIPE', error)
    }
  };

  let saveImages = async function (recipeID, url, callback) {

    try {
      const queryString = `INSERT INTO images (recipe_id, url) VALUES ($1, $2) RETURNING *`;
      const values = [ recipeID, url ];

      let queryResult = await dbPoolInstance.query(queryString, values);

      if (queryResult.rows.length > 0 ){
        console.log('result: ', queryResult);
        return queryResult.rows;
      } else {
        return Promise.reject(new Error('querry is null'));
      }
    } catch (error) {
      console.log('error in model in saveImages', error)
    }
  };

  let saveIngredients = async function (recipeID, ingredientID, callback) {

    try {
      const queryString = `INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES ($1, $2) RETURNING *`;
      const values = [ recipeID, ingredientID ];

      let queryResult = await dbPoolInstance.query(queryString, values);

      if (queryResult.rows.length > 0 ){
        console.log('result: ', queryResult);
        return queryResult.rows;
      } else {
        return Promise.reject(new Error('querry is null'));
      }
    } catch (error) {
      console.log('error in model in saveIngredients', error)
    }
  };

  let saveInstructions = async function (recipeID, description, callback) {

    try {
      const queryString = `INSERT INTO instructions (description, recipe_id) VALUES ($1, $2) RETURNING *`;
      const values = [ description, recipeID ];

      let queryResult = await dbPoolInstance.query(queryString, values);

      if (queryResult.rows.length > 0 ){
        console.log('result: ', queryResult);
        return queryResult.rows;
      } else {
        return Promise.reject(new Error('querry is null'));
      }
    } catch (error) {
      console.log('error in model in saveInstructions', error)
    }
  };

  let getAllRecipes = (callback) => {

    dbPoolInstance.query('SELECT * from recipes', (error, queryResult) => {
      if( error ){
        callback(error, null);

      }else{

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

  let getAllImages = (callback) => {

    dbPoolInstance.query('SELECT * from images', (error, queryResult) => {
      if( error ){
        callback(error, null);

      }else{

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

  let getImagesfromRecipe = (recipeID, callback) => {
    
    let queryString = 'select * from images where recipe_id = $1;'
    let values = [recipeID]
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      if( error ){
        callback(error, null);

      }else{

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

  let getAllIngredients = (callback) => {

    dbPoolInstance.query('SELECT * from ingredients', (error, queryResult) => {
      if( error ){
        callback(error, null);

      }else{

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

  let getIngredientsfromRecipe = (recipeID, callback) => {
    
    let queryString = 'select ingredients.name, ingredients.measurement, ingredients.amount, ingredient_type.name as "type" from ingredients inner join recipe_ingredients on ingredients.id = recipe_ingredients.ingredient_id inner join ingredient_type on ingredients.id = ingredient_type.id where recipe_ingredients.recipe_id = $1;'
    let values = [recipeID]
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      if( error ){
        callback(error, null);

      }else{

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

  let getInstructions = (recipeID, callback) => {
    
    let queryString = 'select * from instructions where recipe_id = $1;'
    let values = [recipeID]
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      if( error ){
        callback(error, null);

      }else{

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };
  
  

  return {
    // create,
    getAllRecipes,
    getAllImages,
    getImagesfromRecipe,
    getAllIngredients,
    getIngredientsfromRecipe,
    getInstructions,
    saveRecipe,
    saveImages,
    saveIngredients,
    saveInstructions,
  };
};
