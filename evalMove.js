
const boxes = [
  {
    location: 1,  // board location 1-16
    value: 2,  // 0,1,2,4,8,16,32...1024
    right: { row: 0, seat: 0 },
    left: { row: 0, seat: 3 },
    up: { row: 0, seat: 3 },
    down: { row: 0, seat: 0 }
  },
  {
    location: 2,  // board location 1-16
    value: 2,  // 0,1,2,4,8,16,32...1024
    right: { row: 0, seat: 1 },
    left: { row: 0, seat: 2 },
    up: { row: 1, seat: 3 },
    down: { row: 1, seat: 0 }
  },
  {
    // 16 objects total
  }
];

let seatingChart = [
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
];

function createSeatingChart(direction) => {
  boxes.map(box => {
    const row = boxes[direction].row;
    const seat = boxes[direction].seat;

    seatingChart[row][seat] = {
        location: box.location,
        value: box.value
    }
  }
}
// Now have array containing 4 arrays of 4 objects

seatingChart.map(row => {
// Evaluate each row in turn
  // seatingChart[0]
    // [0].value === 0 ?
      // Yes, proceed to next seat
    // [1].value === 0 ?
      // Yes, [1] = [0] and [0] = 0
    // [0] === [1] ?
      // Yes, [1] = [1] * 2 and [0] = 0

  // seatingChart[1]
    // [1].value === 0 ?
      // Yes, proceed to next seat
    // [2].value === 0 ?
      // Yes, [2] = [1]
        // Check for adjacent tile
        // [0] !== 0 ? [1] = [0] : [1] = 0
    // [1] === [2] ?
      // Yes, [2] = [2] * 2
        // [0] !== 0 ? [1] = [0] : [1] = 0

  // seatingChart[2]
    // [2].value === 0 ?
      // Yes, proceed to next seat
    // [3].value === 0 ?
      // Yes, [3] = [2]
        // Check for adjacent tile
        // [1] === 0 && [0] === 0 ?
          // Yes, next seat
          // [1] !== 0 ?
            // Yes, [2] = [1]
              // [0] !== 0 ?
                // Yes, [1] = [0] and [0] = 0
            // No,  [2] = 0
    // [2] === [3] ?
      // Yes, [3] = [3] * 2
        // Check seats to left
        // [0] !== 0 ? [1] = [0] : [1] = 0
