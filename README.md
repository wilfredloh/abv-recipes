- View app here: https://abvrecipes.herokuapp.com

# Technologies Used
- React.js, Node.js, Express.js, PostgreSQL
- Other: React Router
- Hosted on Heroku

# Features
- Search for recipes by recipe or ingredient name
- Users can view all recipes and see more details of a selected recipe all on one page
- Users can create recipes that can each contain multiple images, ingredients and instructions
- Ingredients can be re-used for other recipes and are also groupable (eg. dry vs wet)

# Installation
1. Install dependencies
``` 
npm install
```
2. Create db
```
createdb DATABASE_NAME -U USERNAME
```
3. Seed data
```
psql -d DATABASE_NAME -U USERNAME -f tables.sql
psql -d DATABASE_NAME -U USERNAME -f seed.sql
```

# Wireframes
![alt_text](https://github.com/wilfredloh/abv-recipes/blob/master/documents/wire.png)

# Entity Relationship Diagram
![alt_text](https://github.com/wilfredloh/abv-recipes/blob/master/documents/erdiagram.png)
