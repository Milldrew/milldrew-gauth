import { Test, TestingModule } from '@nestjs/testing';
import { GoogleOathService } from './google-oath.service';

describe('GoogleOathService', () => {
  let service: GoogleOathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleOathService],
    }).compile();

    service = module.get<GoogleOathService>(GoogleOathService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
