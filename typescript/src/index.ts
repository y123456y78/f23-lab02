import { newRenderer } from './renderer.js'
import { Rectangle } from './shapes/rectangle.js'
import { Shape } from './shapes/shape'

const shape: Shape = Rectangle(2, 3)
const renderer = newRenderer(shape)
renderer.draw()
