import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AdminsController } from "./admins.controllers";
import { AdminsService } from "./admins.service";
import { AdminSchema } from "./admin.model";



@Module({
    imports: [MongooseModule.forFeature([{name: 'Admin', schema: AdminSchema}])],
    controllers:[AdminsController],
    providers: [AdminsService],
})
export class AdminsModule{}