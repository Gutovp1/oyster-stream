import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchesService {
  getEntityDone(): string {
    return 'Batch entity is created successfully!';
  }
}
