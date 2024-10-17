import { Exercise, ExerciseType } from '../../../shared';
import { ExerciseAdapter } from '../exercise';

export class ExerciseTypeAdapter {
  static adaptResponseBody(data: any): ExerciseType {
    return {
      id: data.id,
      name: data.name,
      exercises: data.exerciseDatas
    };
  }

  static adaptRequestBody(exerciseType: ExerciseType): any {
    return {
      id: exerciseType.id,
      name: exerciseType.name,
      exerciseDatas: exerciseType.exercises?.map(
        (exercise: Exercise) => ExerciseAdapter.adaptRequestBody(exercise))
    };
  }
}