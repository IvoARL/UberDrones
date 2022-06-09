import * as mongoose from 'mongoose';

export const DroneSchema = new mongoose.Schema({ 
    armazem: {type: String, required: true },
    speed: {type: Number, required: true },
    coordenada: {type: Array, required: true },
    status: {type: Boolean, required: true },
});


export interface Drone extends mongoose.Document{
    id: string;
    armazem: string; 
    speed: number; 
    coordenada: number; 
    status: boolean;
}