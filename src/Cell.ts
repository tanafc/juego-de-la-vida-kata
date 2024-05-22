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
    if (numberOfNeighbours > 1) {
      return Cell.alive()
    }
    return Cell.dead()
  }
}
