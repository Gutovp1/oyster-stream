import { Controller, Get } from '@nestjs/common';
import { BatchesService } from '../services/batch.service';

@Controller('batches')
export class BatchesController {
  constructor(private readonly batchService: BatchesService) {}

  @Get()
  getEntityDone(): string {
    return this.batchService.getEntityDone();
  }
}
