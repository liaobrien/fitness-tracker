const router = require('express').Router();
const db = require('../models');

// I think I will need the following:

// GET last workout
router.get('/api/workouts', (req, res) => {
      db.Workout.find()
            .then((workout) => {
                  res.status(200).json(workout);
            })
            .catch((err) => {
                  res.status(400).json(err);
            })
});

// GET workouts in range
router.get('/api/workouts/range', (req, res) => {
      db.Workout.find()
            .sort({ day: -1 }) // reverse chron. order
            .then((workout) => {
                  res.status(200).json(workout);
            })
            .catch((err) => {
                  res.status(400).json(err);
            })
})


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
// router.put('/api/workouts/:id', (req, res) => {
//       db.Workout.findOneAndUpdate(
//             {
//                   _id: req.params.id
//             },
//             {

//             }
//       )
// });

module.exports = router;