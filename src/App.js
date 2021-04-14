import React from 'react';
import Printer from './Printer';

export default () => (
  <Printer>
    {async ({ print, println }) => {
      print('hello ');
      await print('world', 1000);
      await print('!', 500);
      await print('!', 500);
      await println('!', 500);
      await println('this is my cool console', 1000);
      await println('using render props', 1000);
      println('and async/await');
    }}
  </Printer>
);
