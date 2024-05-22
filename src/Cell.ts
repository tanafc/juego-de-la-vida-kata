export abstract class Cell {
  static alive() {
    return new AliveCell()
  }

  static dead() {
    return new DeadCell()
  }

  abstract isAlive(): boolean

  abstract tick(numberOfNeighbours: number): Cell
}

class AliveCell extends Cell {
  tick(numberOfNeighbours: number): Cell {
    if (this.isOvercrowded(numberOfNeighbours) || this.isLonely(numberOfNeighbours)) {
      return Cell.dead()
    }
    return Cell.alive()
  }

  isAlive() {
    return true
  }

  private isLonely(numberOfNeighbours: number) {
    return numberOfNeighbours < 2
  }

  private isOvercrowded(numberOfNeighbours: number) {
    return numberOfNeighbours > 3
  }
}

class DeadCell extends Cell {
  tick(numberOfNeighbours: number): Cell {
    if (numberOfNeighbours < 0) throw new Error("Number of neighbours must be a positive integer")

    if (this.canRevive(numberOfNeighbours)) return Cell.alive()
    return Cell.dead()
  }

  isAlive() {
    return false
  }

  private canRevive(numberOfNeighbours: number) {
    return numberOfNeighbours === 3
  }
}
