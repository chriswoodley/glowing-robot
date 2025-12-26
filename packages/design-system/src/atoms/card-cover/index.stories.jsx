import React from "react";
import CardCover from "atoms/card-cover";
import cardCoverTheme from "atoms/card-cover/theme";
import Card from "molecules/card";

export default {
  title: "Atoms/Card/Card Cover",
  component: CardCover,
  tags: ["autodocs"],
  args: {
    theme: cardCoverTheme,
    src: "https://www.cwoodley.com/projects/mybpstation-com.jpg",
    width: "1263",
    height: "929",
    alt: "Example image",
  },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
};

export const Default = {};
