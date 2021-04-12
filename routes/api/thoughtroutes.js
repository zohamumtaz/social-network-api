const router = require('express').Router();
const {
  createThought,

 deleteThought,
   getAllThoughts,
  getThoughtById,
  updateThought,
 
} = require('../../controllers/thought-controller');


router
  .route('/')
.get(getAllThoughts)
.post(createThought);



router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)

.delete(deleteThought);

  

module.exports = router;
