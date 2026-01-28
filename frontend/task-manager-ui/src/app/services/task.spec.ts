import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Task } from './task';   // ou le chemin correct

describe('Task Service', () => {
  let service: Task;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Task,
        provideHttpClient(),           // ← le vrai en prod
        provideHttpClientTesting()     // ← le mock pour les tests
      ]
    });

    service = TestBed.inject(Task);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Tu pourras ensuite ajouter des tests plus intéressants, par exemple :
  // it('should call http.get avec la bonne URL', () => { ... });
});