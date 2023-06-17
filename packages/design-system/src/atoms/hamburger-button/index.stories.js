import { HamburgerButton } from './index';
import colors from 'styles/utils/color/_export.scss';

export default {
  title: 'Atoms/Hamburger Button',
  component: HamburgerButton,
  tags: [ 'autodocs' ],
};

export const Standard = {
  args: {
    variant: 'standard',
    theme: {
      standard: {
        default: {
          color: colors.black
        }
      }
    }
  }
};
