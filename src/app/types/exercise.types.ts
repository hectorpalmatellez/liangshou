import { MuscleGroup } from '@lstypes/common.types';

type Difficulty = 'beginner' | 'medium' | 'hard';

export interface Exercise {
  name: string;
  group: MuscleGroup;
  level: Difficulty;
}
