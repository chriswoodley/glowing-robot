import Card from 'molecules/card';
import CardSection from 'atoms/card-section';

export default {
  title: 'Atoms/Card/Card Section',
  component: CardSection,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
};

export const Default = {
  render() {
    return (
      <CardSection>
        <p>Some content here...</p>
      </CardSection>
    );
  },
};
