import { Car } from '../car';

export class ParkingLot {
    private capacity: number;
    private slots: (Car | null)[];

    constructor() {
        this.capacity = 0;
        this.slots = [];
    }
}

