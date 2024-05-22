export class NumberOfNeighbours {
  static of(amount: number) {
    if (amount < 0) throw new Error("Number of neighbours must be a positive integer")
    if (amount > 8) throw new Error("Number of neighbours can't be more than 8")
  }
}
