import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";

import { DepotsService } from "./depots.service";

@Controller('depots')
export class DepotsController{
    constructor(private readonly depotsService: DepotsService){}

    
    @Post()
    async addDepots(
            @Body('name') name: string,
            @Body('coordenada') coordenada: number){        
         return await this.depotsService.InsertDepot(name,coordenada);
        
    }

    @Get()
    async getAllDepots(){ 
        const depots = await this.depotsService.getDepots();
        return depots;
    };

    @Get(':name')
    getUser(@Param('name') name: string,){
        return this.depotsService.getSingleDepot(name);
    };

    @Patch(':name')
    async updateDepot(
        @Param('name') name: string,
        @Body('coordenada') coordenada: number,)
    {
    await this.depotsService.updateDepot(name, coordenada);
    return null;
    };
    
    @Delete(':name')
    async removeDepot(@Param('name') name: string){
        await  this.depotsService.deleteDepot(name);
        return null;
    }
}
