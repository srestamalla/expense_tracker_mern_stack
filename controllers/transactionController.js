const TransactionModel = require("../models/TransactionModel");

//@desc Get all transactions
//@route GET/api/v1/transaction
//access public

exports.getTransactions = (req, res, next) => {
  res.send("Get transactions");
};

//@desc Add transactions
//@route POST/api/v1/transaction
//access public

exports.addTransaction = (req, res, next) => {
  res.send("POST transaction");
};

//@desc Delete transactions
//@route DELETE/api/v1/transaction
//access public

exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE transaction");
};
