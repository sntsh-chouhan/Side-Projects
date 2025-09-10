import { Car } from '../car';

export class ParkingLot {
    private capacity: number;
    private slots: (Car | null)[];

    constructor() {
        this.capacity = 0;
        this.slots = [];
    }

    
    // Initializes a new parking lot with a specified number of slots.
    // input: capacity The total number of slots.
    // output: A confirmation message.

    public createParkingLot(capacity: number){
        if (capacity <= 0) {
            return 'Number of slots must be greater than 0.';
        }
        
        this.capacity = capacity;
        this.slots = Array(this.capacity).fill(null);

        return `Created a parking lot with ${this.capacity} slots`;
    }

    
    // Parks a car in the nearest available slot.
    // input:
    //     registrationNumber The car's registration number.
    //     color The car's color.
    // output: A message indicating the allocated slot number or if the lot is full.

    public park(registrationNumber: string, color: string){
        if (this.capacity === 0) {
            return 'Parking lot has not been created yet.';
        }

        let availableSlotIndex = -1;
        availableSlotIndex = this.slots.findIndex(slot => slot === null);

        if (availableSlotIndex === -1) {
            return 'Sorry, parking lot is full';
        }

        this.slots[availableSlotIndex] = { registrationNumber, color };
        const slotNumber = availableSlotIndex + 1;
        return `Allocated slot number: ${slotNumber}`;
    }

    
    // Marks a parking slot as free when a car leaves.
    // input: slotNumber The 1-based slot number to be freed.
    // output: A confirmation message.

    public leave(slotNumber: number){
        const slotIndex = slotNumber - 1; // Convert to 0-based index

        if (slotIndex < 0 || slotIndex >= this.capacity) {
            return `Slot number ${slotNumber} is invalid.`;
        }
        if (this.slots[slotIndex] === null) {
            return `Slot number ${slotNumber} is already free.`;
        }

        this.slots[slotIndex] = null;
        return `Slot number ${slotNumber} is free`;
    }

    
    // Provides the current status of all occupied slots.
    // output:  A formatted string of the current parking status.

    public getStatus(){
        const occupiedSlots = this.slots
            .map((car, index) => ({ car, slotNumber: index + 1 }))
            .filter(item => item.car !== null);

        if (occupiedSlots.length === 0) {
            return 'Parking lot is empty.';
        }

        let status = 'Slot No. Registration No Colour\n';
        occupiedSlots.forEach(({ car, slotNumber }) => {
            status += `${slotNumber} ${car!.registrationNumber} ${car!.color}\n`;
        });
        return status.trim();
    }
    
    
    // Finds registration numbers for all cars of a specific color.
    // output: Lists all registration numbers for cars with the given color.

    public getRegistrationNumbersForColor(color: string){
        const cars = this.slots.filter(car => car?.color === color) as Car[];
        return cars.map(car => car.registrationNumber).join(', ');
    }

    
    // Finds slot numbers for all cars of a specific color.
    // output: Slot numbers occupied by cars of the given color.

    public getSlotNumbersForColor(color: string){
        const slotNumbers = this.slots
            .map((car, index) => (car?.color === color ? index + 1 : null))
            .filter((slot): slot is number => slot !== null);
        return slotNumbers.join(', ');
    }

    // Finds the slot number for a specific registration number.
    // output: slot number for the car with the given registration number.

    public getSlotNumberForRegistrationNumber(registrationNumber: string){
        const slotIndex = this.slots.findIndex(car => car?.registrationNumber === registrationNumber);
        return slotIndex !== -1 ? (slotIndex + 1).toString() : 'Slot No. not found for Registration_Number';
    }
}
