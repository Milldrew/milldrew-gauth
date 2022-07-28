/// <reference types="passport" />
import { Request, Response } from 'express';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    googleAuth(_req: any): Promise<void>;
    googleAuthRedirect(req: Request, res: Response): Promise<Express.User>;
}
