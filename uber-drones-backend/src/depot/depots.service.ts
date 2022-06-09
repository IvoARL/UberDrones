import { Injectable, NotFoundException } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

import {Depot} from './depot.model';


@Injectable()
export class DepotsService{
    private users: Depot[] = [];

    constructor(@InjectModel('Depot') private readonly depotModel:Model<Depot>
    ) {}


    async InsertDepot(name: string, coordenada: number){
        const newDepot = new this.depotModel({
            name:name, 
            coordenada:coordenada,
        });
        const result = await newDepot.save();
        return result;
    }

    async getDepots(){
        const depots = await this.depotModel.find().exec();
        return depots.map((depot) => ({
            id: depot.id, 
            DepotName: depot.name, 
            gps: depot.coordenada,
        }));
    }

    async getSingleDepot(name: string){
        const depot = await this.findDepot(name);
        return {
            id: depot.id, 
            DepotName: depot.name, 
            gps: depot.coordenada,
        };

    }

    async updateDepot(name: string, coordenada: number){
        const updatedDepot = await this.findDepot(name);
        
        if(name){
            updatedDepot.name = name;
        }
        if(coordenada){
            updatedDepot.coordenada = coordenada;
        }
        updatedDepot.save();
 
    };

    private async findDepot(name: string): Promise<Depot> {
        const depot = await this.depotModel.findOne({name});
        if (!depot) {
            throw new NotFoundException('Depot not found');
        }
        return depot;

    }

    async deleteDepot(name: string){
        await this.depotModel.deleteOne({name}).exec();
    }







}