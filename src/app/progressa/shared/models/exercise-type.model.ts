import { Exercise } from './exercise.model';

export interface ExerciseType {
  id?: string;
  name?: string;
  exercises?: Exercise[];
}