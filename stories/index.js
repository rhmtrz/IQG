import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/App.js';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('input')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('input')}>Wow! good job</Button>
  ))
