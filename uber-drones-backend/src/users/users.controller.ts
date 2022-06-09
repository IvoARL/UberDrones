import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";

import { UsersService } from "./users.service";

@Controller('users')
export class UsersController{
    constructor(private readonly usersService: UsersService){}

    
    @Post() //incoming request
    //nestjs analisa @Body'username' => label'username'
    async addUsers(
            @Body('username') username: string,
            @Body('email') email: string, 
            @Body('coordenada') coordenada: number){  

        
         return await this.usersService.InsertUser(username, email, coordenada);
        
    }

    @Get()
    async getAllUsers(){
        const users = await this.usersService.getUsers();
        return users;
    };

    @Get(':id')
    getUser(@Param('id') id: string,){
        return this.usersService.getSingleUser(id);
    };

    @Patch(':id')
    async updateUser(
        @Param('id') id: string, 
        @Body('username') username: string, 
        @Body('email') email:string, 
        @Body('coordenada') coordenada: number,)
    {
    await this.usersService.updateUser(id, username, email, coordenada);
    return null;
    };
    
    @Delete(':id')
    async removeUser(@Param('id') id: string){
        await  this.usersService.deleteUser(id);
        return null;
    };
}

