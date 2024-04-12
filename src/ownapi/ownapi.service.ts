import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OwnapiService {
    constructor(private httpService: HttpService, private readonly configService: ConfigService) {}

    private BASE_URL = this.configService.get<string>('AIDEVS_BASE_URL');
    private API_KEY = this.configService.get<string>('AIDEVS_API_KEY');
    
    async getTask(taskName: string) {
        const token = await this.getToken(taskName).then((res) => res.token);
        const { data } = await firstValueFrom(this.httpService.get(`${this.BASE_URL}/task/${token}`));
        return data;
    }

    async getToken(taskName: string) {
        const req = { apikey: this.API_KEY };
        const { data } = await firstValueFrom(this.httpService.post(`${this.BASE_URL}/token/${taskName}`, req));
        
        return data;
    }
}
