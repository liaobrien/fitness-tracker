const router = require('express').Router();
const db = require('../models');

// GET last workout
router.get('/api/workouts', (req, res) => {
      db.Workout.aggregate([
            {
                  $addFields: {
                        totalDuration: {
                              $sum: '$exercises.duration'
                        },
                  }
            },
      ])
            .sort({ _id: -1 })
            .limit(1)
            .then((workout) => {
                  res.status(200).json(workout);
            })
            .catch((err) => {
                  res.status(400).json(err);
            })
});

// GET - View the combined weight of multiple exercises from the past seven workouts on the stats page.
// GET - View the total duration of each workout from the past seven workouts on the stats page.
router.get('/api/workouts/range', (req, res) => {
      db.Workout.aggregate([
            {
                  $addFields: {
                        totalDuration: {
                              $sum: '$exercises.duration'
                        },
                  }
            },
      ])
            .sort({ _id: 1 }) // chron. order
            .limit(7)
            .then((workout) => {
                  res.status(200).json(workout);
            })
            .catch((err) => {
                  res.status(400).json(err);
            })
});




// Add new exercises to a new workout plan. (POST)
router.post('/api/workouts', ({ body }, res) => {
      db.Workout.create(body)
            .then((workout) => {
                  res.status(200).json(workout);
            })
            .catch((err) => {
                  res.status(400).json(err);
            })
});

// Add exercises to the most recent workout plan. (PUT?)
router.put('/api/workouts/:id', (req, res) => {
      db.Workout.findOneAndUpdate(
            {
                  _id: req.params.id
            },
            {
                  $push: {
                        exercises: req.body
                  }
            },
            {
                  new: true, // return the workout with the update
            }
      )
            .then((workout) => {
                  res.status(200).json(workout);
            })
            .catch((err) => {
                  res.status(400).json(err);
            })
});

module.exports = router;