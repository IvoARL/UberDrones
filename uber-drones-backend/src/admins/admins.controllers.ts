import { Controller, Post, Body, Get, Param, Patch, Delete, Put } from "@nestjs/common";

import { AdminsService } from "./admins.service";

@Controller('admins')
export class AdminsController{
    constructor(private readonly adminsService: AdminsService){}

    
    @Post()
    async addAdmins(
            @Body('AdmiName') name: string,
            @Body('email') email: string,
            @Body('armazem') armazem: string){        
         return await this.adminsService.InsertAdmin(name,email,armazem);}

    @Get()
    async getAllAdmins(){ 
        const admins = await this.adminsService.getAdmins();
        return admins;
    };

    @Get(':id')
    getAdmin(@Param('id') id: string,){
        return this.adminsService.getSingleAdmin(id);
    };

    @Put(':id')
    async updateAdmin(
        @Param('id') id: string,
        @Body('AdmiName') name: string,
        @Body('email') email: string,
        @Body('armazem') armazem: string,
        ){
    await this.adminsService.updateAdmin(id, name, email, armazem);
    return null;
    };
    
    @Delete(':id')
    async removeAdmin(@Param('id') id: string){
        await  this.adminsService.deleteAdmin(id);
        return null;
    };
}
