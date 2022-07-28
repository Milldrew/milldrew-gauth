"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleOathStrategy = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
let GoogleOathStrategy = class GoogleOathStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {
    constructor(configService) {
        console.log(configService.get('OAUTH_GOOGLE_ID'));
        console.log(configService.get('OAUTH_GOOGLE_SECRET'));
        console.log(configService.get('OAUTH_GOOGLE_REDIRECT_URL'));
        super({
            clientID: configService.get('OAUTH_GOOGLE_ID'),
            clientSecret: configService.get('OAUTH_GOOGLE_SECRET'),
            callbackURL: configService.get('OAUTH_GOOGLE_REDIRECT_URL'),
            scope: ['email', 'profile'],
        });
    }
    async validate(_accessToken, _refreshToken, profile) {
        const { id, name, emails } = profile;
        return {
            provider: 'google',
            providerId: id,
            name: name.givenName,
            username: emails[0].value,
        };
    }
};
GoogleOathStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], GoogleOathStrategy);
exports.GoogleOathStrategy = GoogleOathStrategy;
//# sourceMappingURL=google-oath.strategy.js.map