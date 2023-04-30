import React from 'react';
import Icon from './index';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  tags: [ 'autodocs' ],
  argTypes: {},
};

const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  glyph: 'github',
  title: 'My Repository'
};
