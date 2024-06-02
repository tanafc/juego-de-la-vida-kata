import { Cell } from "./Cell.js"
import { Coordinates } from "./Coordinates.js"

export class Board {
  constructor(private readonly boar: Cell[][]) {}

  amountOfNeighbours(coordinates: Coordinates) {
    return 0
  }
}
