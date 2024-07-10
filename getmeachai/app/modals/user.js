import mongoose from 'mongoose';
const { Schema, modal } = mongoose;

const userSchema = new Schema({
  name: {type: String, required : true},
  email: {type: String, required : true},
  razorpayid :{type: String, required : true}, 
  razorpaysecret : {type: String, required : true}
});

const user = modal("user", userSchema)
export default mongoose.modal.user || user

if(error){
  
}

