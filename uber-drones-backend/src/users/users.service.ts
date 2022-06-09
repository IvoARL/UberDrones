import { Injectable, NotFoundException } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

import {User} from './user.model';


@Injectable()
export class UsersService{
    private users: User[] = [];

    constructor(@InjectModel('User') private readonly userModel:Model<User>
    ) {}


    async InsertUser(username: string, email: string, coordenada: number){
        const newUser = new this.userModel({
            username:username, 
            email:email, 
            coordenada:coordenada,
        });
        const result = await newUser.save(); //async -> await (keywords)
        //this.users.push(newUser);
        //console.log(result);
        //return newUser;
        return result;
    }

    async getUsers(){
        const users = await this.userModel.find().exec();
        return users.map((user) => ({
            id: user.id, 
            user: user.username, 
            email: user.email, 
            gps: user.coordenada,
        }));
    }

    async getSingleUser(id: string){
        const user = await this.findUser(id);
        return {
            id: user.id, 
            user: user.username, 
            email: user.email, 
            gps: user.coordenada,
        };

    }

    async updateUser(id: string, username: string, email: string, coordenada: number){
        const updatedUser = await this.findUser(id);
        
        if(username){
            updatedUser.username = username;
        }
        if(email){
            updatedUser.email = email;
        }
        if(coordenada){
            updatedUser.coordenada = coordenada;
        }
        updatedUser.save();
 
    };

    private async findUser(id: string): Promise<User> {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;

    }

    async deleteUser(id: string){
        await this.userModel.deleteOne({id}).exec();
    }







}