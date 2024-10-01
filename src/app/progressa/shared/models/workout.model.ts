export interface Workout {
    id: number;
    date: string;
    exercises: Exercise[];
}

export interface Exercise {
    id: number;
    name: string;
    sets: Set[];
}

export interface Set {
    id: number;
    number: number;
    weight: number;
    repetitions: number;
    rir: number;
}
