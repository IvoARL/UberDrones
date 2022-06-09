import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";

import { DronesService } from "./drones.service";

@Controller('drones')
export class DronesController{
    constructor(private readonly dronesService: DronesService){}

    
    @Post()
    async addDrones(
            @Body('armazem') armazem: string,
            @Body('speed') speed: number,
            @Body('coordenada') coordenada: number,
            @Body('status') status: boolean
            ){        
         return await this.dronesService.InsertDrone(armazem, speed, coordenada, status);}

    @Get()
    async getAllDrones(){ 
        const drones = await this.dronesService.getDrones();
        return drones;
    };

    @Get(':id')
    getDrone(@Param('id') id: string,){
        return this.dronesService.getSingleDrone(id);
    };

    @Patch(':id')
    async updateDrone(
        @Param('id') id: string,
        @Body('armazem') armazem: string,
        @Body('speed') speed: number,
        @Body('coordenada') coordenada: number,
        @Body('status') status: boolean
        ){
    await this.dronesService.updateDrone(id, armazem, speed, coordenada, status);
    return null;
    };
    
    @Delete(':id')
    async removeDrone(@Param('id') id: string){
        await  this.dronesService.deleteDrone(id);
        return null;
    }
}
