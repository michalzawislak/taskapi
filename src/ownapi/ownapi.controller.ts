import { Body, Controller, Post } from '@nestjs/common';
import { OwnapiService } from './ownapi.service';
import { langChainCompletion } from '../helpers/langchain.helpers';
import { QuestionDto } from './dto/question.dto';

@Controller('ownapi')
export class OwnapiController {
    constructor(private ownApiService: OwnapiService) {}

    @Post()
    async postOwnapi(@Body() body: QuestionDto) {
        console.log(body.question);
        const completion = await langChainCompletion(body.question);
        return {
            reply: completion
        };
    }
}
