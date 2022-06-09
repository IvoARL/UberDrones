import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";


import { DepotsController } from "./depots.controller";
import { DepotsService } from "./depots.service";
import { DepotSchema } from "./depot.model";


@Module({
    imports: [MongooseModule.forFeature([{name: 'Depot', schema: DepotSchema}])],
    controllers:[DepotsController],
    providers: [DepotsService],
})
export class DepotsModule{}