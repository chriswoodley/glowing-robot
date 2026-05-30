import CardCover from 'atoms/card-cover';
import Card from 'molecules/card';

export default {
  title: 'Atoms/Card/Card Cover',
  component: CardCover,
  tags: ['autodocs'],
  args: {
    src: 'https://www.cwoodley.com/projects/mybpstation-com.jpg',
    width: '1263',
    height: '929',
    alt: 'Example image',
    ratio: '2:1',
    size: 'xl',
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
