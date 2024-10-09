import { Exercise, ExerciseType } from '../../../shared';

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
      exerciseDatas: exerciseType.exercises?.map((exercise: Exercise) => ({
        id: exercise.id,
        exerciseTypeId: exercise.exerciseTypeId,
        exerciseTypeName: exercise.exerciseTypeName,
        setDatas: exercise.sets,
        workoutId: exercise.workoutId
      }))
    };
  }
}