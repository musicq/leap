import React from 'react'
import {text, number} from '@storybook/addon-knobs'
import {Button} from './Button'

export default {title: 'Button'}

export const primary = () => {
  console.log(number('Padding', 0))
  console.log(text('Text', 'Click me'))

  return <Button>{text('Text', 'Click me')}</Button>
}
