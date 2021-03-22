const router = require('express').Router();
const {
  addAccount,
  getAllAccounts,
  getAccountById,
  editAccount,
  deleteAccount
} = require('../controllers/accounts.controller');

router
  .route('/accounts')
  .get(getAllAccounts)
  .post(addAccount);

router
  .route('/accaunts/:id')
  .get(getAccountById)
  .put(editAccount)
  .delete(deleteAccount);

module.exports = router;
