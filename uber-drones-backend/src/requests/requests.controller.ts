import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";

import { RequestsService } from "./requests.service";

@Controller('requests')
export class RequestsController{
    constructor(private readonly requestsService: RequestsService){}

    
    @Post()
    async addRequests(
            @Body('user') user: string,
            @Body('drone_id') drone_id: string,
            @Body('armazem') armazem: string,
            @Body('status') status: boolean
            ){        
         return await this.requestsService.InsertRequest(user, drone_id, armazem, status);}

    @Get()
    async getAllRequests(){ 
        const requests = await this.requestsService.getRequests();
        return requests;
    };

    @Get(':id')
    getDrone(@Param('id') id: string,){
        return this.requestsService.getSingleRequest(id);
    };

    @Patch(':id')
    async updateRequest(
        @Param('id') id: string,
        @Body('user') user: string,
        @Body('drone_id') drone_id: string,
        @Body('armazem') armazem: string,
        @Body('status') status: boolean
        ){
    await this.requestsService.updateRequest(id, user, drone_id, armazem, status);
    return null;
    };
    
    @Delete(':id')
    async removeRequest(@Param('id') id: string){
        await  this.requestsService.deleteRequest(id);
        return null;
    }
}
