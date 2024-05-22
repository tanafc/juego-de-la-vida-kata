import { describe, it, expect } from "vitest"
import { Cell } from "./Cell.js"

describe("Cell", () => {
  it("can be created alive", () => {
    const cell = Cell.alive()

    const result = cell.isAlive()

    expect(result).toBe(true)
  })

  it("can be created dead", () => {
    const cell = Cell.dead()

    const result = cell.isAlive()

    expect(result).toBe(false)
  })

  it("dies if it has no neighbours", () => {
    const cell = Cell.alive()

    const newCell = cell.tick(0)

    expect(newCell.isAlive()).toBe(false)
  })

  it("dies if it has 1 neighbour", () => {
    const cell = Cell.alive()

    const newCell = cell.tick(1)

    expect(newCell.isAlive()).toBe(false)
  })

  it("stays alives if it has 2 neighbours", () => {
    const cell = Cell.alive()

    const newCell = cell.tick(2)

    expect(newCell.isAlive()).toBe(true)
  })

  it("stays alives if it has 3 neighbours", () => {
    const cell = Cell.alive()

    const newCell = cell.tick(3)

    expect(newCell.isAlive()).toBe(true)
  })

  it("dies if it has 4 neighbours", () => {
    const cell = Cell.alive()

    const newCell = cell.tick(4)

    expect(newCell.isAlive()).toBe(false)
  })

  it("dies if it has 8 neighbours", () => {
    const cell = Cell.alive()

    const newCell = cell.tick(8)

    expect(newCell.isAlive()).toBe(false)
  })

  it("revives if it has 3 neighbours", () => {
    const cell = Cell.dead()

    const newCell = cell.tick(3)

    expect(newCell.isAlive()).toBe(true)
  })

  it("stays dead if it has 2 neighbours", () => {
    const cell = Cell.dead()

    const newCell = cell.tick(2)

    expect(newCell.isAlive()).toBe(false)
  })

  it("stays dead if it has 4 neighbours", () => {
    const cell = Cell.dead()

    const newCell = cell.tick(4)

    expect(newCell.isAlive()).toBe(false)
  })

  it("throws an error if number of neighbours is negative", () => {
    const cell = Cell.dead()

    const result = () => cell.tick(-1)

    expect(result).toThrowError("Number of neighbours must be a positive integer")
  })

  it("throws an error if number of neighbours is more than 8", () => {
    const cell = Cell.dead()

    const result = () => cell.tick(9)

    expect(result).toThrowError("Number of neighbours can't be more than 8")
  })
})
