import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";


import { DronesController } from "./drones.controller";
import { DronesService } from "./drones.service";
import { DroneSchema } from "./drone.model";



@Module({
    imports: [MongooseModule.forFeature([{name: 'Drone', schema: DroneSchema}])],
    controllers:[DronesController],
    providers: [DronesService],
})
export class DronesModule{}