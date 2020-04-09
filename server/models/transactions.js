import mongoose from "mongoose";

const { Schema } = mongoose;

const TransactionSchema = new Schema({
  transactionId: {
    type: Number,
    required: true,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  accountBalance: {
    type: Number,
    required: true,
  },
});

export const Transaction = mongoose.model("Transaction", TransactionSchema);
