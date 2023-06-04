import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create book service method', () => {
    
    let bookServiceMock = spyOn(service, 'getAllBooksData').withArgs()
      .and.returnValue(of('mock result'))
      
    service.getAllBooksData().subscribe((data: any) => {
      //expect(data).toEqual(of('mock result'));
    });
    expect(service.getAllBooksData).toHaveBeenCalled();
  })
});
