INSERT INTO recipes (name) VALUES ('Spiced Fresh Tomato Soup');
INSERT INTO recipes (name) VALUES ('Chicken Rice');
INSERT INTO recipes (name) VALUES ('Char Kway Teow');
INSERT INTO recipes (name) VALUES ('Cheesecake');
INSERT INTO recipes (name) VALUES ('Fried Chicken');
INSERT INTO recipes (name) VALUES ('Cereal');


INSERT INTO images (url, recipe_id) VALUES ('https://hips.hearstapps.com/hmg-prod/images/delish-classic-tomato-soup-seo-01-1539282214.jpg', 1);
INSERT INTO images (url, recipe_id) VALUES ('https://prod.static9.net.au/_/media/2017/05/26/15/55/Pohs-Hainanese-chicken-rice.jpg', 2);
INSERT INTO images (url, recipe_id) VALUES ('https://tasteasianfood.com/wp-content/uploads/2018/07/Char-Kuey-Teow-3.jpg', 3);
INSERT INTO images (url, recipe_id) VALUES ('https://cookiesandcups.com/wp-content/uploads/2017/10/perfectcheesecake-13-1.jpg', 4);
INSERT INTO images (url, recipe_id) VALUES ('https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg', 5);
INSERT INTO images (url, recipe_id) VALUES ('https://cdn.shopify.com/s/files/1/1305/4751/products/StaySteady_Maple_Pecan_Life_26708371-ecea-4ea9-bd54-3feb5cdf2caf_2000x.png?v=1554409757', 6);


INSERT INTO instructions (description, recipe_id) VALUES ('Make soup: Heat large Dutch oven on medium-low. Add olive oil, then onion, red pepper, and salt, and cook, covered, stirring occasionally, until tender, 8 to 10 minutes.', 1);
INSERT INTO instructions (description, recipe_id) VALUES ('Meanwhile, finely grate garlic, jalapeño, and ginger. Add to onion and cook, stirring, 1 minute. Stir in ground coriander and ground cumin and cook 1 minute.', 1);
INSERT INTO instructions (description, recipe_id) VALUES ('Add tomatoes and water; increase heat and simmer, partially covered, 10 minutes. While tomatoes are cooking, toast 2 pocketless pitas.', 1);


INSERT INTO ingredients (name, measurement, amount) VALUES ('olive oil', 'tbsp', 1.5);
INSERT INTO ingredients (name, measurement, amount) VALUES ('red pepper', 'large', 1);
INSERT INTO ingredients (name, measurement, amount) VALUES ('cucumber', '', 1);
INSERT INTO ingredients (name, measurement, amount) VALUES ('ground cumin', 'tsp', 2);
INSERT INTO ingredients (name, measurement, amount) VALUES ('brown sugar', 'tbsp', 1);


INSERT INTO ingredient_type (name, ingredient_id) VALUES ('wet', 1);
INSERT INTO ingredient_type (name, ingredient_id) VALUES ('dry', 2);
INSERT INTO ingredient_type (name, ingredient_id) VALUES ('dry', 3);
INSERT INTO ingredient_type (name, ingredient_id) VALUES ('dry', 4);
INSERT INTO ingredient_type (name, ingredient_id) VALUES ('dry', 5);


INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES (1, 1);
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES (1, 2);
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES (1, 3);
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES (1, 4);
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES (2, 1);
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES (2, 2);
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES (2, 5);
