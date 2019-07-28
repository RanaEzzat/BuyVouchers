const mongoose = require("mongoose");
var Voucher = mongoose.Schema.Types.Voucher;

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  region: {
    type: String,
    required: true,
    trim: true
  },
  building: {
    type: Number,
    required: true,
    min: 0
  },
  points: {
    type: Number,
    required: false,
    min: 0
  },
  vouchers: {
    companyID: {
      type: String,
      required: true,
      
    },
    voucherID: {
      type: String,
      required: true,
     
    },
    title: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    offer: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    promocode: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    status: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    color:{
      type: String,
      trim:true,
      default: "Blue is secondary"
    },
    user:{
     type: String,
     default: "8987"
    }
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
});

mongoose.model("User", userSchema);
