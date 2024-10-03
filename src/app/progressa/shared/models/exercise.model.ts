import { ExerciseSet } from "./exercise-set.model";

export interface Exercise {
  id: number;
  name: string;
  sets: ExerciseSet[];
}