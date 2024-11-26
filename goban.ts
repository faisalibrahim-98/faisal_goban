enum Status {
  WHITE = 1,
  BLACK = 2,
  EMPTY = 3,
  OUT = 4,
}

export class Goban {
  goban: string[];

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
    const direction = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];

    for (let i = 0; i < direction.length; i++) {
      const adjacentStatus = this.getStatus(
        x + direction[i][0],
        y + direction[i][1]
      );

      if (adjacentStatus && adjacentStatus === Status.EMPTY) return false;
    }

    return true;
  }
}
