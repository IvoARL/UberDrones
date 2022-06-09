import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({ 
    username: {type: String, required: true },
    email: {type: String, required: true },
    coordenada: {type: Array, required: true },
});


export interface User extends mongoose.Document{
    username: string; 
    email: string;
    coordenada: number;

}


/*export class User {

    constructor(
        public username: string, 
        public email: string, 
        public coordenada: number,
        ){};
}*/