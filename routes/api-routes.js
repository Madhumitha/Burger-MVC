// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");

// Import the views to complete MVC workflow

const mainLayoutView = require('../views/layouts/main.js');
const indexLayoutView = require('../views/index.js');
const leftLayoutView = require('../views/layouts/left.js');
const rightLayoutView = require('../views/layouts/right.js');

// Routes
// =============================================================
module.exports = function(app) {

// Create all our routes and set up logic within those routes where required.
app.get('/', function(req, res) {

    async function getNames() {
      try {
        await db.burgers.findAll().then(function(data) {

          let names = []
          let devour = []

          //Send burger names that have a devour value of false to the "names" array, and those that have a devour value of true to the "devour" array
          for(let i = 0; i < data.length; i++) {
            console.log("DATA", data[i].dataValues.burger_name)
            if(data[i].dataValues.devoured === 0) {
              names.push(leftLayoutView.render(data[i].dataValues.burger_name, i+1))
            } else {
              devour.push(rightLayoutView.render(data[i].dataValues.burger_name, i+1))
            }
          }

          // Render the HTML from the js files required above
          res.send(mainLayoutView.render(indexLayoutView.render(names.join(''), devour.join(''))))
        })
      } catch(error) {
        console.log(error);
      }
    }
    getNames();
});

app.post("/api/burgers", function(req, res) {

    db.burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
    }).then(function(data){
      console.log(data);
      res.json(data);
    });
 });

app.put("/api/burgers/:id", function(req, res) {
    var condition =  req.params.id;
  
    console.log("condition", condition);
  
    db.burgers.update(
      {
        devoured: req.body.devoured
      },
      {
        where: {id: condition}
      }) .then(result => {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      });
});
}
