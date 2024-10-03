import { Exercise } from '../../../shared';

export class ExerciseAdapter {
  static adapt(data: any): Exercise {
    return {
      id: data.id,
      name: data.name,
      sets: data.sets
    };
  }
}