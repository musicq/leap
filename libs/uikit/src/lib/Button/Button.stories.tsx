import {text} from '@storybook/addon-knobs'
import React from 'react'
import {Button} from './Button'

export default {title: 'Button'}

export const primary = () => {
  return <Button>{text('Text', 'Click me')}</Button>
}
