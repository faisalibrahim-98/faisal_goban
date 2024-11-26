enum Status {
  WHITE = 1,
  BLACK = 2,
  EMPTY = 3,
  OUT = 4,
}

export class Goban {
  goban: string[];
  directions: number[][] = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  stoneToFind: Status | undefined;

  constructor(goban: string[]) {
    this.goban = goban;
  }

  getStatus(x: number, y: number): Status | undefined {
    if (
      !this.goban ||
      x < 0 ||
      y < 0 ||
      y >= this.goban.length ||
      x >= this.goban[0]?.length
    ) {
      return Status.OUT;
    } else if (this.goban[y][x] === ".") {
      return Status.EMPTY;
    } else if (this.goban[y][x] === "o") {
      return Status.WHITE;
    } else if (this.goban[y][x] == "#") {
      return Status.BLACK;
    } else {
      return undefined;
    }
  }

  // x = col, y = row.
  isTaken(x: number, y: number): boolean {
    const visited = new Set<string>();
    this.stoneToFind = this.getStatus(x, y);

    if (this.stoneToFind === Status.EMPTY || this.stoneToFind === Status.OUT)
      return false;

    const result = !this.hasFreedom(x, y, visited);
    visited.clear();

    return result;
  }

  hasFreedom = (
    modifiedx: number,
    modifiedy: number,
    visited: Set<string>
  ): boolean => {
    const key = `${modifiedx},${modifiedy}`;
    if (visited.has(key)) return false;
    visited.add(key);

    for (const [dx, dy] of this.directions) {
      const nx = modifiedx + dx;
      const ny = modifiedy + dy;
      const status = this.getStatus(nx, ny);

      if (status === Status.EMPTY) return true;
      if (status === this.stoneToFind && this.hasFreedom(nx, ny, visited))
        return true;
    }
    return false;
  };
}
