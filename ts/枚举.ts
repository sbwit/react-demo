enum Direction{
    UP,
    DOWN,
    LEFT,
    RIGHT
}
console.log(Direction.UP)
console.log(Direction.DOWN)

enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
console.log(Direction2.Up)
console.log(Direction2.Down)

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

 