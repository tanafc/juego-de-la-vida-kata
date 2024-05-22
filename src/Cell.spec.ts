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

  it.todo("stays alives if it has 3 neighbours")
  it.todo("stays alives if it has 2 neighbours")
  it.todo("dies if it has 4 neighbours")
  it.todo("dies if it has 8 neighbours")
  it.todo("revives if it has 3 neighbours")
  it.todo("stays dead if it has 2 neighbours")
  it.todo("stays dead if it has 4 neighbours")
})
