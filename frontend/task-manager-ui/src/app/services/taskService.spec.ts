import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TaskService } from './TaskService';


describe('Task Service', () => {
  let service:  TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaskService,
        provideHttpClient(),           // ← le vrai en prod
        provideHttpClientTesting()     // ← le mock pour les tests
      ]
    });

    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Tu pourras ensuite ajouter des tests plus intéressants, par exemple :
  // it('should call http.get avec la bonne URL', () => { ... });
});