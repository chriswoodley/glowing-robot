import 'styles/index.scss';
import './styles.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import { applyTheme } from '../src/theme';
import { ThemeProvider } from 'styled-components';

const theme = applyTheme();

const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    default: 'light',
    grid: {
      cellSize: 24,
      opacity: 0.5,
      cellAmount: 2,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <Controls />
        <Stories />
      </>
    ),
  }
}

const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
];

export default {
  parameters,
  decorators
}