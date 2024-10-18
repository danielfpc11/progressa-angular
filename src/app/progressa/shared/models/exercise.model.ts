import { ExerciseSet } from './exercise-set.model';

// TODO Clarify which need to be optional
export interface Exercise {
  id?: number;
  workoutId?: number;
  exerciseTypeId?: number;
  exerciseTypeName?: string;
  sets?: ExerciseSet[];
}