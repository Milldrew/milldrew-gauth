import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { GoogleOathGuard } from './google-oath.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(GoogleOathGuard)
  async googleAuth(@Req() _req) {}

  @Get('redirect')
  @UseGuards(GoogleOathGuard)
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    return req.user;
  }
}
