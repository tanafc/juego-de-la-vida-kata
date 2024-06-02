export class Coordinates {
  private constructor(
    private readonly x: number,
    private readonly y: number,
  ) {}

  public static at(x: number, y: number) {
    return new Coordinates(x, y)
  }
}
