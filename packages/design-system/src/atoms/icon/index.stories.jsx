import React from 'react';
import Icons from 'atoms/icons';
import Icon from 'atoms/icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  tags: [ 'autodocs' ],
  args: {
    glyph: 'github',
    title: 'My title',
    size: 48
  }
};

export const Default = {
  render(args) {
    return (
      <>
        <Icons />
        <Icon {...args} />
      </>
    );
  }
};
