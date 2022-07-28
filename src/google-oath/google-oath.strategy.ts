import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleOathStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(configService: ConfigService) {
    console.log(configService.get('OAUTH_GOOGLE_ID'));
    console.log(configService.get('OAUTH_GOOGLE_SECRET'));
    console.log(configService.get('OAUTH_GOOGLE_REDIRECT_URL'));
    super({
      clientID: configService.get<string>('OAUTH_GOOGLE_ID'),
      clientSecret: configService.get<string>('OAUTH_GOOGLE_SECRET'),
      callbackURL: configService.get<string>('OAUTH_GOOGLE_REDIRECT_URL'),
      scope: ['email', 'profile'],
    });
  }
  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ) {
    const { id, name, emails } = profile;

    return {
      provider: 'google',
      providerId: id,
      name: name.givenName,
      username: emails[0].value,
    };
  }
}
