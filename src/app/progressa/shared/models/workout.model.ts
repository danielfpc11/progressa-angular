import { Exercise } from './exercise.model';

export interface Workout {
    id?: number;
    date?: string;
    exercises?: Exercise[];
}