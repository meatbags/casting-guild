class Vector {
  constructor(x, y) {
    // two-dimensional vector

    this.x = x;
    this.y = y;
  }

  distanceTo(vec) {
    // get distance to vector

    return Math.sqrt(Math.pow(vec.x - this.x, 2) + Math.pow(vec.y - this.y, 2));
  }
}

const wrap = (value, min, max) => {
  return ((value < min) ? value + (max - min) : ((value > max) ? value - (max - min) : value));
}

export { Vector, wrap };
