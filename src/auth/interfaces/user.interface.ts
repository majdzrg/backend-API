import { Document } from 'mongoose';

export interface User extends Document {
    _id: string;
    fullName: string;
    email: string;
    address: string;
    phone: string;
    password: string;
    roles: [boolean];   
    
}