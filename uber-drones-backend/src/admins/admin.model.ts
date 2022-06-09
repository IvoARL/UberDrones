import * as mongoose from 'mongoose';

export const AdminSchema = new mongoose.Schema({ 
    name: {type: String, required: true },
    email: {type: String, required: true },
    armazem: {type: String, required: true },
});


export interface Admin extends mongoose.Document{
    name: string; 
    email: string; 
    armazem: string; 
}