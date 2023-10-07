import React from 'react';
import Card from 'molecules/card';
import cardTheme from 'molecules/card/theme';

export default {
  title: 'Molecules/Card',
  component: Card,
  tags: [ 'autodocs' ],
  args: {
    theme: cardTheme,
  },
};

export const Default = {
  render(args) {
    return (
      <Card
        {...args}
      >
        <p>Some content here...</p>
      </Card>
    );
  }
};

export const WithCardSection = {
  render(args) {
    return (
      <Card
        {...args}
      >
        <Card.Section>
          <p>Some content here...</p>
        </Card.Section>
      </Card>
    );
  }
};

export const WithCardSectionAndCardCover = {
  render(args) {
    return (
      <Card
        {...args}
      >
        <Card.Cover
          src="https://www.cwoodley.com/projects/mybpstation-com.jpg"
          width="1263"
          height="929"
          alt="Example image"
        />
        <Card.Section>
          <p>Some content here...</p>
        </Card.Section>
      </Card>
    );
  }
};

export const WithCardSectionAndCardCoverAndCustomWidth = {
  args: {
    width: '50%'
  },
  render(args) {
    return (
      <Card
        {...args}
      >
        <Card.Cover
          src="https://www.cwoodley.com/projects/mybpstation-com.jpg"
          width="1263"
          height="929"
          alt="Example image"
        />
        <Card.Section>
          <p>Some content here...</p>
        </Card.Section>
      </Card>
    );
  }
};

export const WithOnClick = {
  argTypes: { onClick: { action: 'clicked' } },
  args: {
    width: '50%',
  },
  render(args) {
    return (
      <Card
        {...args}
      >
        <Card.Cover
          src="https://www.cwoodley.com/projects/mybpstation-com.jpg"
          width="1263"
          height="929"
          alt="Example image"
        />
        <Card.Section>
          <p>Some content here...</p>
        </Card.Section>
      </Card>
    );
  }
};
