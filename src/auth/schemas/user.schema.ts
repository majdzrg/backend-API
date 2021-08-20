import * as mongoose from 'mongoose';
import * as validator from 'validator';
import * as bcrypt from 'bcrypt';
import { isEmail } from 'class-validator';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 6,
    maxlength: 255,
    required: [true, 'NAME_IS_BLANK'],
  },
  address: {
    type: String,
    minlength: 6,
    maxlength: 255,
    required: [true, 'ADDRESS_IS_BLANK'],
  },
  phone: {
    type: String,
    minlength: 8,
    maxlength: 10,
    required: [true, 'PHONE_IS_BLANK'],
  },
  roles: {
    type: [String],
    default: ['admin'],
  },
  email: {
    type: String,
    lowercase: true,
    validate: [ isEmail, 'invalid email' ],
    maxlength: 255,
    minlength: 6,
    required: [true, 'EMAIL_IS_BLANK'],
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 1024,
   // required: [false, 'PASSWORD_IS_BLANK'],
  }
});

UserSchema.pre('save', async function(next: mongoose.HookNextFunction) {
  try {
    if(!this.isModified('password')) {
      return next();
    }
    // tslint:disable-next-line:no-string-literal
    const hashed = await bcrypt.hash(this['password'], 10);
    // tslint:disable-next-line:no-string-literal
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});