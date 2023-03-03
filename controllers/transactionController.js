const TransactionModel = require("../models/TransactionModel");

//@desc Get all transactions
//@route GET/api/v1/transaction
//access public

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await TransactionModel.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
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
