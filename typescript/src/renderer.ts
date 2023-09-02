import { Shape } from './shapes/shape'

interface Renderer {
  draw: () => void
}

function newRenderer (shape: Shape): Renderer {
  return {
    draw () {
      const area: number = shape.computeArea()
      console.log(`Shape drawn\nIts area is ${area}`)
    }
  }
}

export { newRenderer }
