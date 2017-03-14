const boxes = [
  {
    location: 1,  // board location 1-16
    value: 0,  // 0,1,2,4,8,16,32...1024
    right: { row: 0, seat: 0 },
    left: { row: 0, seat: 3 },
    up: { row: 0, seat: 3 },
    down: { row: 0, seat: 0 }
  },
  {
    location: 2,
    value: 0,
    right: { row: 0, seat: 1 },
    left: { row: 0, seat: 2 },
    up: { row: 1, seat: 3 },
    down: { row: 1, seat: 0 }
  },
  {
    location: 3,
    value: 0,
    right: { row: 0, seat: 2 },
    left: { row: 0, seat: 3 },
    up: { row: 2, seat: 3 },
    down: { row: 2, seat: 0 }
  },
  {
    location: 4,
    value: 0,
    right: { row: 0, seat: 3 },
    left: { row: 0, seat: 0 },
    up: { row: 3, seat: 3 },
    down: { row: 3, seat: 0 }
  },
  {
    location: 5,
    value: 0,
    right: { row: 1, seat: 0 },
    left: { row: 1, seat: 3 },
    up: { row: 0, seat: 2 },
    down: { row: 0, seat: 1 }
  },
  {
    location: 6,
    value: 0,
    right: { row: 1, seat: 1 },
    left: { row: 1, seat: 2 },
    up: { row: 1, seat: 2 },
    down: { row: 1, seat: 1 }
  },
  {
    location: 7,
    value: 0,
    right: { row: 1, seat: 2 },
    left: { row: 1, seat: 1 },
    up: { row: 2, seat: 2 },
    down: { row: 2, seat: 1 }
  },
  {
    location: 8,
    value: 0,
    right: { row: 1, seat: 3 },
    left: { row: 1, seat: 0 },
    up: { row: 3, seat: 2 },
    down: { row: 3, seat: 0 }
  },
  {
    location: 9,
    value: 0,
    right: { row: 2, seat: 0 },
    left: { row: 2, seat: 3 },
    up: { row: 0, seat: 1 },
    down: { row: 0, seat: 2 }
  },
  {
    location: 10,
    value: 0,
    right: { row: 2, seat: 1 },
    left: { row: 2, seat: 2 },
    up: { row: 1, seat: 1 },
    down: { row: 1, seat: 2 }
  },
  {
    location: 11,
    value: 0,
    right: { row: 2, seat: 2 },
    left: { row: 2, seat: 1 },
    up: { row: 2, seat: 1 },
    down: { row: 2, seat: 2 }
  },
  {
    location: 12,
    value: 0,
    right: { row: 2, seat: 3 },
    left: { row: 2, seat: 0 },
    up: { row: 3, seat: 1 },
    down: { row: 3, seat: 2 }
  },
  {
    location: 13,
    value: 0,
    right: { row: 3, seat: 0 },
    left: { row: 3, seat: 3 },
    up: { row: 0, seat: 0 },
    down: { row: 0, seat: 3 }
  },
  {
    location: 14,  
    value: 0,
    right: { row: 3, seat: 1 },
    left: { row: 3, seat: 2 },
    up: { row: 1, seat: 0 },
    down: { row: 1, seat: 3 }
  },
  {
    location: 15,
    value: 0,
    right: { row: 3, seat: 1 },
    left: { row: 3, seat: 2 },
    up: { row: 2, seat: 0 },
    down: { row: 2, seat: 3 }
  },
  {
    location: 16,
    value: 0,
    right: { row: 3, seat: 3 },
    left: { row: 3, seat: 0 },
    up: { row: 3, seat: 0 },
    down: { row: 3, seat: 3 }
  }
];
