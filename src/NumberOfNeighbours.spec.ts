import { describe, expect, it } from "vitest"
import { NumberOfNeighbours } from "./NumberOfNeighbours.js"

describe("NumberOfNeighbours", () => {
  it("throws an error if number of neighbours is negative", () => {
    const result = () => NumberOfNeighbours.of(-1)

    expect(result).toThrowError("Number of neighbours must be a positive integer")
  })

  it("throws an error if number of neighbours is more than 8", () => {
    const result = () => NumberOfNeighbours.of(9)

    expect(result).toThrowError("Number of neighbours can't be more than 8")
  })
})
