//BACKEND

const router = require('express').Router();
const db = require('../models');

router.get('/workouts', (req, res) => {
  // Find me all of the workouts in our database
  db.Workout.find({})
    .then(workouts => {
      // give that back to the frontend 
      res.json(workouts);
    })
})

router.put('/workouts/:id', (req, res) => {
  db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
})




router.post("/workouts", ({ body }, res) => {
  // creating the book
  db.Workout.create(body)
    // adding the book id to the library - new:true will force the return of the modified document
    .then((workout) => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get('/workouts/range', (req, res) => {
  // Find me all of the workouts in our database
  db.Workout.find({})
    .then(workouts => {
      // give that back to the frontend 
      res.json(workouts);
    })
})



module.exports = router;