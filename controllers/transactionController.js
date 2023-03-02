//@desc Get all transactions
//@route GET/api/v1/transaction
//access public

exports.getTransactions = (req, res, next) => {
  res.send("Get transactions");
};
