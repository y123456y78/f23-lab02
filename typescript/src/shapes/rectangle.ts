import { Shape } from './shape'

function Rectangle (width: number, height: number): Shape {
  return {
    computeArea: function (): number {
      return width * height
    }
  }
}

export { Rectangle }
