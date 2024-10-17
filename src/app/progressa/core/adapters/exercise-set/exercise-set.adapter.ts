import { ExerciseSet } from '../../../shared';

export class ExerciseSetAdapter {
  static adaptResponseBody(data: any): ExerciseSet {
    return {
      id: data.id,
      number: data.number,
      rir: data.rir,
      weight: data.weight,
      repetitions: data.repetitions,
      exerciseId: data.exerciseId
    };
  }

  static adaptRequestBody(exerciseSet: ExerciseSet): any {
    return {
      id: exerciseSet.id,
      number: exerciseSet.number,
      rir: exerciseSet.rir,
      weight: exerciseSet.weight,
      repetitions: exerciseSet.repetitions,
      exerciseId: exerciseSet.exerciseId
    };
  }
}