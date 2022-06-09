import { Injectable, NotFoundException } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

import { Request } from "./request.model";

@Injectable()
export class RequestsService{
    private requests: Request[] = [];

    constructor(@InjectModel('Request') private readonly requestModel:Model<Request>
    ) {}


    async InsertRequest(user: string, drone_id: string, armazem: string, status: boolean,){
        const newRequest = new this.requestModel({
            user:user, 
            drone_id:drone_id,
            armazem:armazem,
            status:status,
        });
        const result = await newRequest.save();
        return result;
    }

    async getRequests(){
        const requests = await this.requestModel.find().exec();
        return requests.map((request) => ({
            Request_ID: request.id, 
            username: request.user, 
            Drone_ID: request.drone_id,
            armazem: request.armazem,
            status: request.status,
        }));
    }

    async getSingleRequest(id: string){
        const request = await this.findRequest(id);
        return {
            Request_ID: request.id, 
            username: request.user, 
            Drone_ID: request.drone_id,
            armazem: request.armazem,
            status: request.status,
        };

    }

    async updateRequest(id: string, user: string, drone_id: string, armazem: string, status: boolean,){
        const updatedRequest = await this.findRequest(id);
        
        if(user){
            updatedRequest.user = user;
        }
        if(drone_id){
            updatedRequest.drone_id = drone_id;
        }
        if(armazem){
            updatedRequest.armazem = armazem;
        }
        if(status){
            updatedRequest.status = status;
        }
        updatedRequest.save();
 
    };

    private async findRequest(id: string): Promise<Request> {
        const request = await this.requestModel.findById(id);
        if (!request) {
            throw new NotFoundException('Request not found');
        }
        return request;

    }

    async deleteRequest(id: string){
        await this.requestModel.deleteOne({id}).exec();
    }







}