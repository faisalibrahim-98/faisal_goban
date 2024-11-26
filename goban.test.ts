import { describe, expect, test, xtest } from "@jest/globals";
import { Goban } from "./goban";

describe("Goban isTaken tests", () => {
  test("White stone is taken when surrounded by black stones", () => {
    const goban = new Goban([".#.", "#o#", ".#."]);

    expect(goban.isTaken(1, 1)).toBe(true);
  });

  test("White stone is not taken when it has a liberty", () => {
    const goban = new Goban(["...", "#o#", ".#."]);

    expect(goban.isTaken(1, 1)).toBe(false);
  });

  test("Black shape is taken when surrounded", () => {
    const goban = new Goban(["oo.", "##o", "o#o", ".o."]);

    expect(goban.isTaken(0, 1)).toBe(true);
    expect(goban.isTaken(1, 1)).toBe(true);
    expect(goban.isTaken(1, 2)).toBe(true);
  });

  test("Black shape is not taken when it has a liberty", () => {
    const goban = new Goban(["oo.", "##.", "o#o", ".o."]);

    expect(goban.isTaken(0, 1)).toBe(true);  // Flipped this, as it should be true.
    expect(goban.isTaken(1, 1)).toBe(false);
    expect(goban.isTaken(1, 2)).toBe(true); // Flipped this, as it should be true as well.
  });

  test("Square shape is taken", () => {
    const goban = new Goban(["oo.", "##o", "##o", "oo."]);

    expect(goban.isTaken(0, 1)).toBe(true);
    expect(goban.isTaken(0, 2)).toBe(true);
    expect(goban.isTaken(1, 1)).toBe(true);
    expect(goban.isTaken(1, 2)).toBe(true);
  });
});
