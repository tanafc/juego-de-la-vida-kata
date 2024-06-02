import { describe, expect, it } from "vitest"
import { Cell } from "./Cell.js"
import { Board } from "./Board.js"
import { Coordinates } from "./Coordinates.js"

describe("Board", () => {
  describe("amountOfNeighbours", () => {
    it("returns 0 if all are dead", () => {
      const board = new Board([
        [Cell.dead(), Cell.dead(), Cell.dead()],
        [Cell.dead(), Cell.dead(), Cell.dead()],
        [Cell.dead(), Cell.dead(), Cell.dead()],
      ])

      const result = board.amountOfNeighbours(Coordinates.at(1, 1))

      expect(result).toBe(0)
    })

    it.todo("returns 1 if east cell is alive")
    it.todo("returns 1 if north cell is alive")
    it.todo("returns 1 if west cell is alive")
    it.todo("returns 1 if south cell is alive")
    it.todo("returns 1 if northeast cell is alive")
    it.todo("returns 1 if northwest cell is alive")
    it.todo("returns 1 if southeast cell is alive")
    it.todo("returns 1 if southwest cell is alive")
  })
})
