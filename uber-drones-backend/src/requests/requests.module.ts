import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { RequestsController } from "./requests.controller";
import { RequestsService } from "./requests.service";
import { RequestSchema } from "./request.model";




@Module({
    imports: [MongooseModule.forFeature([{name: 'Request', schema: RequestSchema}])],
    controllers:[RequestsController],
    providers: [RequestsService],
})
export class RequestsModule{}