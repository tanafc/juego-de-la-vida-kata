export class Cell {
  constructor(private readonly life: boolean) {}

  static alive() {
    return new Cell(true)
  }

  static dead() {
    return new Cell(false)
  }

  isAlive() {
    return this.life
  }

  tick(numberOfNeighbours: number) {
    if (this.isAlive() === false) {
      if (numberOfNeighbours > 2) return Cell.alive()
      return Cell.dead()
    }
    if (this.isOvercrowded(numberOfNeighbours) || this.isLonely(numberOfNeighbours)) {
      return Cell.dead()
    }
    return Cell.alive()
  }

  private isLonely(numberOfNeighbours: number) {
    return numberOfNeighbours < 2
  }

  private isOvercrowded(numberOfNeighbours: number) {
    return numberOfNeighbours > 3
  }
}
