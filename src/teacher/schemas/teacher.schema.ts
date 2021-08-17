import * as mongoose from 'mongoose';
import { number, string } from 'yargs';

export const TeacherSchema = new mongoose.Schema({
     id: Number,
     tel: Number,
     email: String,
     adresse: String,
}); 

