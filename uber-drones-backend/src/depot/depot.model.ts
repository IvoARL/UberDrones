import * as mongoose from 'mongoose';

export const DepotSchema = new mongoose.Schema({ 
    name: {type: String, required: true },
    coordenada: {type: Array, required: true },
});


export interface Depot extends mongoose.Document{
    name: string; 
    coordenada: number;

}