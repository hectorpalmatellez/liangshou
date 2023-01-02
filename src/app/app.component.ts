import { Component, OnInit } from '@angular/core';
import { MuscleService } from '@services/muscles/muscle.service';
import { ExerciseService } from '@services/exercise/exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private muscleService: MuscleService, private exerciseService: ExerciseService) {
  }
  title = 'liangshou';

  ngOnInit() {
    this.muscleService.getMuscles().subscribe((response) => {
      console.log(response);
    })
    this.muscleService.getMuscleByGroup('shoulder').subscribe((response) => {
      console.log(response)
    })
    this.exerciseService.getExercises().subscribe((response) => {
      console.log(response);
    })
  }
}
