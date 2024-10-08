import { Exercise, Workout } from '../../../shared';

export class WorkoutAdapter {
  static adaptResponseBody(data: any): Workout {
    return {
      id: data.id,
      date: data.date,
      exercises: data.exerciseDatas
    };
  }

  static adaptRequestBody(workout: Workout): any {
    return {
      id: workout.id,
      date: workout.date,
      exerciseDatas: workout.exercises?.map((exercise: Exercise) => ({
        id: exercise.id,
        exerciseTypeId: exercise.exerciseTypeId,
        exerciseTypeName: exercise.exerciseTypeName,
        setDatas: exercise.sets,
        workoutId: exercise.workoutId
      }))
    };
  }
}