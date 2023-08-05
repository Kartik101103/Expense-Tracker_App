const express = require("express");
const { addTransaction, getAllTransaction , editTransection ,deleteTransaction } = require("../controllers/transactionControler");
//router object
const router = express.Router();
//routers
//add transaction
router.post('/add-transection',addTransaction);
//edit transaction
router.post('/edit-transection',editTransection);
//delete transaction
router.post('/delete-transection',deleteTransaction);
//get transactions
router.post('/get-transection',getAllTransaction);
module.exports = router;