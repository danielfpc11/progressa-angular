import { TestBed } from '@angular/core/testing';
import { ExerciseSetService } from './exercise-set.service';

// TODO Finish the test
describe('SetService', () => {
  let setService: ExerciseSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    setService = TestBed.inject(ExerciseSetService);
  });

  it('should be created', () => {
    expect(setService)
      .toBeTruthy();
  });
});
