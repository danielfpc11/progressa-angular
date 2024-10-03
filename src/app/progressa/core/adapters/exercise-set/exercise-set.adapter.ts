import { ExerciseSet } from '../../../shared';

export class ExerciseSetAdapter {
  static adapt(data: any): ExerciseSet {
    return {
      id: data.id,
      number: data.number,
      rir: data.rir,
      weight: data.weight,
      repetitions: data.repetitions
    };
  }
}