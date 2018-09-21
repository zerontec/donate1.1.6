import { TestBed, inject } from '@angular/core/testing';

import { InfoPaginaSevicesService } from './info-pagina-sevices.service';

describe('InfoPaginaSevicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoPaginaSevicesService]
    });
  });

  it('should be created', inject([InfoPaginaSevicesService], (service: InfoPaginaSevicesService) => {
    expect(service).toBeTruthy();
  }));
});
