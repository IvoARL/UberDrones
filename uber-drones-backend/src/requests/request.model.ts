import * as mongoose from 'mongoose';

export const RequestSchema = new mongoose.Schema({ 
    user: {type: String, required: true },
    drone_id: {type: String, required: true },
    armazem: {type: String, required: true },
    status: {type: Boolean, required: true },
});


export interface Request extends mongoose.Document{
    id: string;
    user: string; 
    drone_id: string;
    armazem: string; 
    status: boolean;
}