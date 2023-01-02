import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Muscle } from '@lstypes/muscle.types';
import { MuscleGroup } from '@lstypes/common.types';
import { UtilsService } from '@services/utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {

  constructor(private utils: UtilsService) {
  }
  getMuscles(): Observable<Array<Muscle>> {
    return this.utils.get('muscle')
  }
  getMuscleByGroup(group: MuscleGroup): Observable<Array<Muscle>> {
    return this.utils.get(`muscle/${group}`)
  }
}
