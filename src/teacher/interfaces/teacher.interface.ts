import { Mongoose } from "mongoose";
import { Document } from 'mongoose';

export interface ITeacher extends Document {
    readonly id: number;
    readonly tel: number;
    readonly email: string;
    readonly adresse: string;
}