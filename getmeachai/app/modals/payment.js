import mongoose from 'mongoose';
const { Schema, modal } = mongoose;

const paymentSchema = new Schema({
  name: {type: String, required : true},
  to_user: {type: String, required : true},
  order_id :{type: String, required : true}, 
  amount :{type: Number, required : true}, 
  message : {type: String},
  created_at :{type: Date, default : Date.now}, 
  updated_at :{type: Date, default : Date.now}, 
  done : {type: Boolean, default : false}
});

const payment = modal("payment", paymentSchema)
export default mongoose.modal.payment || payment