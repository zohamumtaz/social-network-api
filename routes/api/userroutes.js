const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  
} = require('../../controllers/user-controller');

// remove 12 to 20//
/*router.route('/:pizzaId').post(addComment);

router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);


router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);
*/


router
.route('/')
.get(getAllUsers)
.post(createUser);


router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;
module.exports = router;
 