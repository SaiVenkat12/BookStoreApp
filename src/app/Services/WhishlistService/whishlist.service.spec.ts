import { TestBed } from '@angular/core/testing';

import { WhishlistService } from './whishlist.service';
import { HttpClientModule } from '@angular/common/http';

describe('WhishlistService', () => {
  let service: WhishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports : [HttpClientModule]});
    service = TestBed.inject(WhishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
