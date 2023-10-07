import React from 'react';
import { within } from '@storybook/testing-library';
import Card from 'molecules/card';
import CardSection from 'atoms/card-section';
import cardSectionTheme from 'atoms/card-section/theme';

export default {
  title: 'Atoms/Card/Card Section',
  component: CardSection,
  tags: [ 'autodocs' ],
  args: {
    theme: cardSectionTheme,
  },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ]
};

export const Default = {
  render() {
    return (
      <CardSection>
        <p>Some content here...</p>
      </CardSection>
    );
  }
};
