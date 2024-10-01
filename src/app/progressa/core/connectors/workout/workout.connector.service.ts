import { BehaviorSubject, Observable } from 'rxjs';
import { Workout } from '../../../shared';
import { WorkoutService } from '../../services';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutConnector {

  private workoutsSubject = new BehaviorSubject<Workout[]>([]);
  private actualWorkoutSubject = new BehaviorSubject<Workout | null>(null);

  workouts$: Observable<Workout[]> = this.workoutsSubject.asObservable();
  actualWorkout$: Observable<Workout | null> = this.actualWorkoutSubject.asObservable();

  constructor(private service: WorkoutService) {
  }

  getWorkout(): void {
    this.service.getWorkout()
        .subscribe({
          next: (workouts: Workout[]) => this.workoutsSubject.next(workouts),
          error: (error) => console.error(`Error fetching data, ERROR: ${error}`)
        });
  }

  getWorkoutById(id: number): void {
    this.service.getWorkoutById(id)
        .subscribe({
          next: (workout: Workout) => this.actualWorkoutSubject.next(workout),
          error: (error) => console.error(`Error fetching data with ID: ${id}, ERROR: ${error}`)
        });
  }

  createWorkout(workout: Workout): void {
    this.service.createWorkout(workout)
        .subscribe({
          next: (workout: Workout) => {
            const currentWorkoutList: Workout[] = this.workoutsSubject.value;
            this.workoutsSubject.next([...currentWorkoutList, workout]);
          },
          error: (error) => console.error(`Error creating workout, ERROR: ${error}`)
        });
  }

  updateWorkout(id: number, workout: Workout): void {
    this.service.updateWorkout(id, workout)
        .subscribe({
          next: (workout: Workout) => {
            const currentList: Workout[] = this.workoutsSubject.value;
            const updatedList: Workout[] = currentList.map((updated: Workout): Workout =>
              updated.id === workout.id ?
                workout :
                updated
            );
            this.workoutsSubject.next(updatedList);
          },
          error: (error) => console.error(`Error updating workout, ERROR: ${error}`)
        });
  }

  deleteWorkout(id: number): void {
    this.service.deleteWorkout(id)
        .subscribe({
          next: () => {
            const currentList: Workout[] = this.workoutsSubject.value;
            const updatedList: Workout[] = currentList.filter((deleted) => deleted.id !== id);
            this.workoutsSubject.next(updatedList);
          },
          error: (error) => console.log(`Error deleting workout, ERROR: ${error}`)
        });
  }

}