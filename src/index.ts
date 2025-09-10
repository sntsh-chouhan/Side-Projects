import * as readline from 'readline';
import { ParkingLot } from './classes/ParkingLot';

const parkingLot = new ParkingLot();

function processCommand(line: string) {
  const [command, ...args] = line.split(' ');

  switch (command) {
    case 'create_parking_lot':
      console.log(parkingLot.createParkingLot(parseInt(args[0], 10)));
      break;
    case 'park':
      console.log(parkingLot.park(args[0], args[1]));
      break;
    case 'leave':
      console.log(parkingLot.leave(parseInt(args[0], 10)));
      break;
    case 'status':
      console.log(parkingLot.getStatus());
      break;
    case 'registration_numbers_for_cars_with_colour':
      console.log(parkingLot.getRegistrationNumbersForColor(args[0]));
      break;
    case 'slot_numbers_for_cars_with_colour':
      console.log(parkingLot.getSlotNumbersForColor(args[0]));
      break;
    case 'slot_number_for_registration_number':
      console.log(parkingLot.getSlotNumberForRegistrationNumber(args[0]));
      break;
    case 'exit':
      process.exit(0);
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
