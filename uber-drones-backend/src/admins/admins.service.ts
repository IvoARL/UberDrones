import { Injectable, NotFoundException } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

import { Admin } from "./admin.model";

@Injectable()
export class AdminsService{
    private admins: Admin[] = [];

    constructor(@InjectModel('Admin') private readonly adminModel:Model<Admin>
    ) {}


    async InsertAdmin(name: string, email: string, armazem: string,){
        const newAdmin = new this.adminModel({
            name:name, 
            email:email,
            armazem:armazem,
        });
        const result = await newAdmin.save();
        return result;
    }

    async getAdmins(){
        const admins = await this.adminModel.find().exec();
        return admins.map((admin) => ({
            id: admin.id, 
            AdminName: admin.name, 
            email: admin.email,
            armazem: admin.armazem,
        }));
    }

    async getSingleAdmin(id: string){
        const admin = await this.findAdmin(id);
        return {
            id: admin.id, 
            AdmiName: admin.name, 
            email: admin.email,
            armazem: admin.armazem,
        };

    }

    async updateAdmin(id: string, name: string, email: string, armazem: string){
        const updatedAdmin = await this.findAdmin(id);
        
        if(name){
            updatedAdmin.name = name;
        }
        if(email){
            updatedAdmin.email = email;
        }
        if(armazem){
            updatedAdmin.armazem = armazem;
        }
        updatedAdmin.save();
 
    };

    private async findAdmin(id: string): Promise<Admin> {
        const admin = await this.adminModel.findById(id);
        if (!admin) {
            throw new NotFoundException('Depot not found');
        }
        return admin;

    }

    async deleteAdmin(id: string){
        await this.adminModel.deleteOne({id}).exec();
    }







}