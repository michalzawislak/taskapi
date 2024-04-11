import { Body, Controller, Get, Post } from '@nestjs/common';
import { OwnapiService } from './ownapi.service';
import { langChainCompletion } from 'src/helpers/langchain.helpers';

@Controller('ownapi')
export class OwnapiController {
    constructor(private ownApiService: OwnapiService) {}

    @Get()
    async getOwnapi() {
        const token = (await this.ownApiService.getTask('ownapi'));
        return token;
    }

    @Post()
    async postOwnapi(@Body() question: string) {
        const completion = await langChainCompletion(question);
        return {
            reply: completion
        };
    }
}
