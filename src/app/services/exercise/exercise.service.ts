import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Exercise } from '@lstypes/exercise.types';
import { UtilsService } from '@services/utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  constructor(private utils: UtilsService) {
  }

  getExercises(): Observable<Array<Exercise>> {
    return this.utils.get('exercise')
  }
}
