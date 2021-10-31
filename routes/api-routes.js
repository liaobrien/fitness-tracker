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


// Add new exercises to a new workout plan. (POST)
router.post('/api/workouts', ({ body }, res) => {
      db.Workout.create(body)
            .then((workout) => {
                  res.status(200).json(workout);
            })
            .catch((err) => {
                  res.status(400).json(err);
            })
})

// Add exercises to the most recent workout plan. (PUT?)
// router.put('/api/workouts/:id', (req, res) => {
//       db.Workout.findOneAndUpdate(
//             {
//                   _id: req.params.id
//             },
//             {

//             }
//       )
// })

// View the combined weight of multiple exercises from the past seven workouts on the stats page.

// View the total duration of each workout from the past seven workouts on the stats page.

module.exports = router;