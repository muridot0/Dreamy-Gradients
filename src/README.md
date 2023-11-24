# Dreamy Gradients

A simple an easy way to add background gradients to your webpage.

![Screenshot](<dreamy-gradients.png>)

## Installation

Install with

```sh
npm install @muridot0/dreamy-gradients
yarn add @muridot0/dreamy-gradients
```

## Usage

```tsx
import { DreamyGradient } from '@muridot0/dreamy-gradients'

function Demo() {
  return <DreamyGradient
          size={{ height: '10rem', width: '10rem' }}
          color='linear-gradient(180deg, #7D40FF 0%, #F58A25 100%, #7230FF 100%)'
          position={{ top: '100%', right: '100%' }}
          blur={2}
        />
}
```

## Properties

| Name            | Type                     | Default      | Description                                                    |
| --------------- | ------------------------ | ------------ | -------------------------------------------------------------- |
| `color`         | RGB, RGBA, HEX, LINEARGRADIENT| - | Sets the color of the gradient. Some out of the box colors are: `red`, `yellow`, `blue`, `green`.|
| `position`      | {top: string, bottom: string, left: string, right: string} | undefined | Adjusts the vertical and horizontal position of the gradient.|
| `animate` | 'true', 'false', CSSKeyframes | 'false' | Adds an animation to the gradient. Setting to 'true' adds a default spinning animation to the gradient where as adding a CSSKeyframe object allows you to set your own animation.|
| `size` | {height: string, width: string} | - | Sets the size of the gradient.|
| `blur` | number | 1 | Adjusts the blur on the gradient.|
| `borderRadius` | string | undefined | Adjusts the curvature of the gradient.|

