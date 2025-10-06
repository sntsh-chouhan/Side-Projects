# Parking Lot Automation System
#### A simple command-line application to simulate an automated ticketing system for a parking lot.

---

## Setup Instructions

1. **Make scripts executable**  
   Before running the setup, grant execute permissions to the scripts in the `bin` directory:

   ```bash
   chmod +x bin/setup bin/parking_lot
   ```

2. **Run the setup script**  
   This will install dependencies, compile the TypeScript source code, and run unit tests to verify everything is working correctly:

   ```bash
   ./bin/setup
   ```

---

## How to Run the App

The application supports two modes of operation:

### 1. Interactive Mode
Run the application in an interactive shell by executing the `parking_lot` script without any arguments. You can then type commands one by one.

```bash
./bin/parking_lot
```

**Example session:**
```
> create_parking_lot 3
Created a parking lot with 3 slots
> park KA-01-HH-1234 White
Allocated slot number: 1
> status
Slot No. Registration No Colour
1 KA-01-HH-1234 White
> exit
```

---

### 2. File-based Input Mode
Run the application with a set of commands from a file by providing the file path as an argument.

```bash
./bin/parking_lot file_inputs.txt
```

**Sample Input (`file_inputs.txt`):**
```
create_parking_lot 6
park KA-01-HH-1234 White
park KA-01-HH-9999 White
park KA-01-BB-0001 Black
leave 2
status
registration_numbers_for_cars_with_colour White
slot_number_for_registration_number KA-01-BB-0001
```

**Corresponding Output:**
```
Created a parking lot with 6 slots
Allocated slot number: 1
Allocated slot number: 2
Allocated slot number: 3
Slot number 2 is free
Slot No. Registration No Colour
1 KA-01-HH-1234 White
3 KA-01-BB-0001 Black
KA-01-HH-1234
3
```

---

## How to Run Tests

Tests are executed automatically during the `./bin/setup` command.  
To run them manually:

```bash
npm test
```
---

## Made by Santosh Chouhan  

**Email**: [santosh.c0308@gmail.com](mailto:santosh.c0308@gmail.com)  
**Phone**: +91 7999907332  
**LinkedIn**: [linkedin.com/in/santosh94](https://www.linkedin.com/in/santosh94/)  
**GitHub**: [github.com/sntsh-chouhan](https://github.com/sntsh-chouhan)  
**Resume**: [View Resume](https://drive.google.com/file/d/1NtFv8MVBUIPhJKQwgvAabsRcsZbuFkhp/view?usp=sharing)  
