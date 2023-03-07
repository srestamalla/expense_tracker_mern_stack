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
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc Add transactions
//@route POST/api/v1/transaction
//access public

exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await TransactionModel.create(req.body);
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

//@desc Delete transactions
//@route DELETE/api/v1/transaction
//access public

exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await TransactionModel.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transactions found",
      });
    }

    await transaction.deleteOne(); //did not run when i used remove() method

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
