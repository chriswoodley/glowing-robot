import React from 'react';
import AspectRatioContainer from './index';

export default {
  title: 'Atoms/Aspect Ratio Container',
  component: AspectRatioContainer,
  tags: [ 'autodocs' ],
  argTypes: {},
};

const Template = (args) => <AspectRatioContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
