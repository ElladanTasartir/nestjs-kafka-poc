import { KafkaContext } from '@nestjs/microservices';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    readMessage(message: any, context: KafkaContext): string;
}
