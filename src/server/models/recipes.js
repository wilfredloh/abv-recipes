/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let create = (recipe, callback) => {
    // set up query
    const queryString = `INSERT INTO recipes (name, img)
      VALUES ($1, $2) RETURNING *`;
    const values = [
      recipe.name,
      recipe.img
    ];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      if( error ){
        console.log("query error", error)
        callback(error, null);

      }else{

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows[0]);

        }else{
          callback(null, null);

        }
      }
    });
  };

  let getAll = (callback) => {

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


  return {
    create,
    getAll
  };
};
