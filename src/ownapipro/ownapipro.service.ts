import { Injectable } from '@nestjs/common';
import {langChainCompletionWithQuestionOrInfo } from 'src/helpers/langchain.helpers';

@Injectable()
export class OwnapiproService {
  async create(questionOrInfo: string) {
    const completion = await langChainCompletionWithQuestionOrInfo(questionOrInfo);
    return completion;
  }
}
