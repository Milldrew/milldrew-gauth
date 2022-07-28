import { ConfigService } from '@nestjs/config';
import { Profile, Strategy } from 'passport-google-oauth20';
declare const GoogleOathStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleOathStrategy extends GoogleOathStrategy_base {
    constructor(configService: ConfigService);
    validate(_accessToken: string, _refreshToken: string, profile: Profile): Promise<{
        provider: string;
        providerId: string;
        name: string;
        username: string;
    }>;
}
export {};
