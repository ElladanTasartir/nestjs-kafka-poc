import { ClientKafka } from '@nestjs/microservices';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly client;
    constructor(appService: AppService, client: ClientKafka);
    getHello(): string;
    newMessage(): import("rxjs").Observable<any>;
}
