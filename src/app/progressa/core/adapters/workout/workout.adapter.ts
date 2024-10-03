import { Workout } from '../../../shared';

export class WorkoutAdapter {

  static adapt(data: any): Workout {
    return {
      id: data.id,
      date: data.date,
      exercises: data.exercises
    };
  }
}