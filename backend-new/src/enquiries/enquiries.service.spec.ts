import { Test, TestingModule } from '@nestjs/testing';
import { EnquiriesService } from './enquiries.service';

describe('EnquiriesService', () => {
  let service: EnquiriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnquiriesService],
    }).compile();

    service = module.get<EnquiriesService>(EnquiriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
