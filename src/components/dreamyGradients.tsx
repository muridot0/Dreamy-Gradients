'use client'
import React from 'react'
import styled, { CSSKeyframes, css, keyframes } from 'styled-components'

const keyframeAnimation = (val?: CSSKeyframes) =>
  keyframes(
    val
      ? val
      : {
          '0%': { transform: 'rotate(0) scale(0.8)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(0.8)' }
        }
  )

const animateKeyframe = (val?: CSSKeyframes) => css`
  animation: ${keyframeAnimation(val)} 5s infinite;
`
interface GradientContainerI {
  $size: { height: string; width: string }
  $animate?: 'true' | 'false' | CSSKeyframes
  $position?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
  $blur: number
}

const GradientContainer = styled.div<GradientContainerI>`
  width: ${(props) => props.$size.width};
  height: ${(props) => props.$size.height};
  position: absolute;
  z-index: -1;

  filter: ${(props) => `blur(${props.$blur}rem)`};

  ${(props) =>
    props.$animate === 'true'
      ? animateKeyframe()
      : props.$animate !== 'false'
      ? animateKeyframe(props.$animate)
      : null};

  top: ${(props) => props.$position?.top && `${props.$position.top}`};
  left: ${(props) => props.$position?.left && `${props.$position.left}`};
  right: ${(props) => props.$position?.right && `${props.$position.right}`};
  bottom: ${(props) => props.$position?.bottom && `${props.$position.bottom}`};
`
type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`
type LINEARGRADIENT = `linear-gradient(${
  | `${string}`
  | `${string}, ${string}`
  | `${number}deg, ${RGBA} ${number}%, ${HEX} ${number}%`})`

type Color = RGB | RGBA | HEX

interface GradientI {
  $color?:
    | 'yellow'
    | 'red'
    | 'blue'
    | 'green'
    | RGB
    | RGBA
    | HEX
    | LINEARGRADIENT
  $size: { height: string; width: string }
  $position?: {
    top?: number
    right?: number
    bottom?: number
    left?: number
  }
  $borderRadius?: string
}

const Gradient = styled.div<GradientI>`
  width: ${(props) => props.$size.width};
  height: ${(props) => props.$size.height};

  border-radius: ${(props) => props.$borderRadius};

  background: ${(props) => {
    if (
      props.$color === 'blue' ||
      props.$color === 'green' ||
      props.$color === 'red' ||
      props.$color === 'yellow'
    ) {
      switch (props.$color) {
        case 'blue':
          return `linear-gradient(180deg, rgba(0, 194, 255, 0.00) 0%, #0000FF 100%)`
        case 'red':
          return `linear-gradient(180deg, rgba(0, 194, 255, 0.00) 0%, #FF0000 100%)`
        case 'green':
          return `linear-gradient(180deg, rgba(0, 194, 255, 0.00) 0%, #00FF00 100%)`
        case 'yellow':
          return `linear-gradient(90deg, rgba(0, 194, 255, 0.00) 0%, #FFFF00 100%)`
      }
    } else if (
      props.$color?.startsWith('rgb') ||
      props.$color?.startsWith('rgba') ||
      props.$color?.startsWith('#')
    ) {
      return `linear-gradient(180deg, rgba(0, 194, 255, 0.00) 0%, ${props.$color} 100%)`
    } else if (props.$color?.startsWith('linear-gradient')) {
      return props.$color
    }
  }};
`

interface DreamyGradientI {
  /**
   * Sets the color of the gradient. Default values of
   * `yellow`, `red`, `blue`, `green`. Accepts
   * `RGB` `RGBA` `HEX` and `LINEARGRADIENT` values
   */
  color?:
    | 'yellow'
    | 'red'
    | 'blue'
    | 'green'
    | RGB
    | RGBA
    | HEX
    | LINEARGRADIENT
  /**
   * Allows user to set the horizontal and vertical position of the gradient.
   * Dreamy gradients come with position absolute out of the box.
   */
  position?: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  /**
   * Allows user to set custom animation for example:
   * ```tsx
   * <DreamyGradient
        top={10}
        color='red'
        size={{ height: 20, width: 20 }}
        animate={{
          from: {top: '0px'},
          to: {top: '200px'}
        }}
      />
      ```
   * Default animation
   * that can be enabled with true. Default value is false
   */
  animate?: 'true' | 'false' | CSSKeyframes
  /**
   * Sets the size of the gradient.
   */
  size: { height: `${number}${'rem' | 'px' | '%'}`, width: `${number}${'rem' | 'px' | '%'}` }
  blur: number
  borderRadius?: `${number}${'rem' | 'px' | '%'}`
}

const DreamyGradient: React.FC<DreamyGradientI> = ({
  position,
  color,
  animate = 'false',
  size,
  blur,
  borderRadius
}) => {
  return (
    <GradientContainer
      $blur={blur}
      $size={size}
      $position={position}
      $animate={animate}
    >
      <Gradient $color={color} $size={size} $borderRadius={borderRadius}></Gradient>
    </GradientContainer>
  )
}

export default DreamyGradient
