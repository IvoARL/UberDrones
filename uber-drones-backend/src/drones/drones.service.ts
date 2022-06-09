import { Injectable, NotFoundException } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';


import { Drone } from "./drone.model";

@Injectable()
export class DronesService{
    private drones: Drone[] = [];

    constructor(@InjectModel('Drone') private readonly droneModel:Model<Drone>
    ) {}


    async InsertDrone(armazem: string, speed: number, coordenada: number, status: boolean,){
        const newDrone = new this.droneModel({
            armazem:armazem, 
            speed:speed,
            coordenada:coordenada,
            status:status,
        });
        const result = await newDrone.save();
        return result;
    }

    async getDrones(){
        const drones = await this.droneModel.find().exec();
        return drones.map((drone) => ({
            id: drone.id, 
            ArmazemDrone: drone.armazem, 
            speed: drone.speed,
            coordenada: drone.coordenada,
            status: drone.status,
        }));
    }

    async getSingleDrone(id: string){
        const drone = await this.findDrone(id);
        return {
            id: drone.id, 
            ArmazemDrone: drone.armazem, 
            speed: drone.speed,
            coordenada: drone.coordenada,
            status: drone.status,
        };

    }

    async updateDrone(id: string, armazem: string, speed: number, coordenada: number, status: boolean,){
        const updatedDrone = await this.findDrone(id);
        
        if(armazem){
            updatedDrone.armazem = armazem;
        }
        if(speed){
            updatedDrone.speed = speed;
        }
        if(coordenada){
            updatedDrone.coordenada = coordenada;
        }
        if(status){
            updatedDrone.status = status;
        }
        updatedDrone.save();
 
    };

    private async findDrone(id: string): Promise<Drone> {
        const drone = await this.droneModel.findById(id);
        if (!drone) {
            throw new NotFoundException('Drone not found');
        }
        return drone;

    }

    async deleteDrone(id: string){
        await this.droneModel.deleteOne({id}).exec();
    }







}