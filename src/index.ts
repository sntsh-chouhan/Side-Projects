import * as readline from 'readline';
import { ParkingLot } from './classes/ParkingLot';

const parkingLot = new ParkingLot();

function processCommand(line: string) {
    const [command, ...args] = line.split(' ');

    switch (command) {
        case 'create_parking_lot':
            break;
        case 'park':
            break;
        case 'leave':
            break;
        case 'status':
            break;
        case 'registration_numbers_for_cars_with_colour':
            break;
        case 'slot_numbers_for_cars_with_colour':
            break;
        case 'slot_number_for_registration_number':
            break;
        case 'exit':
        default:
            console.log(`Unknown command: ${command}`);
            break;
  }
}

// 🔹 Interactive shell mode
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

console.log('Welcome to Parking Lot System. Type "exit" to quit.');
rl.prompt();

rl.on('line', (line) => {
    if (line.trim()) {
        processCommand(line.trim());
    }
    rl.prompt();
}).on('close', () => {
    process.exit(0);
});
