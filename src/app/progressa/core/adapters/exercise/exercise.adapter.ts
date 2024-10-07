import { Exercise, ExerciseSet } from '../../../shared';

export class ExerciseAdapter {
  static adaptResponseBody(data: any): Exercise {
    return {
      id: data.id,
      workoutId: data.workoutId,
      exerciseTypeId: data.exerciseTypeId,
      exerciseTypeName: data.exerciseTypeName,
      sets: data.setDatas
    };
  }

  static adaptRequestBody(exercise: Exercise): any {
    return {
      id: exercise.id,
      workoutId: exercise.workoutId,
      exerciseTypeId: exercise.exerciseTypeId,
      exerciseTypeName: exercise.exerciseTypeName,
      setDatas: exercise.sets?.map((exerciseSet: ExerciseSet) => ({
        id: exerciseSet.id,
        number: exerciseSet.number,
        rir: exerciseSet.rir,
        weight: exerciseSet.weight,
        repetitions: exerciseSet.repetitions,
        exerciseId: exerciseSet.exerciseId
      }))
    };
  }
}