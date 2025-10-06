import { ParkingLot } from '../src/classes/ParkingLot';

describe('ParkingLot', () => {
  let parkingLot: ParkingLot;

  beforeEach(() => {
    parkingLot = new ParkingLot();
  });

  test('should create a parking lot with a specified number of slots', () => {
    const result = parkingLot.createParkingLot(6);
    expect(result).toBe('Created a parking lot with 6 slots');
  });

  test('should park a car and allocate the nearest slot', () => {
    parkingLot.createParkingLot(6);
    const result = parkingLot.park('KA-01-HH-1234', 'White');
    expect(result).toBe('Allocated slot number: 1');
  });
  
  test('should not park a car if the lot is full', () => {
    parkingLot.createParkingLot(1);
    parkingLot.park('KA-01-HH-1234', 'White');
    const result = parkingLot.park('KA-01-HH-9999', 'White');
    expect(result).toBe('Sorry, parking lot is full');
  });

  test('should free a slot when a car leaves', () => {
    parkingLot.createParkingLot(2);
    parkingLot.park('KA-01-HH-1234', 'White');
    const result = parkingLot.leave(1);
    expect(result).toBe('Slot number 1 is free');
  });

  test('should return status of the parking lot', () => {
    parkingLot.createParkingLot(3);
    parkingLot.park('KA-01-HH-1234', 'White');
    parkingLot.park('KA-01-HH-9999', 'Black');
    const status = parkingLot.getStatus();
    expect(status).toBe(
        'Slot No. Registration No Colour\n' +
        '1 KA-01-HH-1234 White\n' +
        '2 KA-01-HH-9999 Black'
    );
  });

  test('should find registration numbers for cars with a specific color', () => {
    parkingLot.createParkingLot(3);
    parkingLot.park('KA-01-HH-1234', 'White');
    parkingLot.park('KA-01-HH-9999', 'White');
    parkingLot.park('KA-01-BB-0001', 'Black');
    const result = parkingLot.getRegistrationNumbersForColor('White');
    expect(result).toBe('KA-01-HH-1234, KA-01-HH-9999');
  });

  test('should find slot numbers for cars with a specific color', () => {
    parkingLot.createParkingLot(3);
    parkingLot.park('KA-01-HH-1234', 'White');
    parkingLot.park('KA-01-BB-0001', 'Black');
    parkingLot.park('KA-01-HH-9999', 'White');
    const result = parkingLot.getSlotNumbersForColor('White');
    expect(result).toBe('1, 3');
  });

  test('should find the slot number for a given registration number', () => {
    parkingLot.createParkingLot(2);
    parkingLot.park('KA-01-HH-1234', 'White');
    parkingLot.park('KA-01-HH-9999', 'Black');
    const result = parkingLot.getSlotNumberForRegistrationNumber('KA-01-HH-9999');
    expect(result).toBe('2');
  });

  test('should return "Not found" for a registration number not in the lot', () => {
    parkingLot.createParkingLot(1);
    parkingLot.park('KA-01-HH-1234', 'White');
    const result = parkingLot.getSlotNumberForRegistrationNumber('MH-04-AY-1111');
    expect(result).toBe('Not found');
  });
});

