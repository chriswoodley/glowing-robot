import colors from 'styles/utils/color/_export.scss';

const theme = {
  light: {
    standard: {
      default: {
        backgroundColor: colors.white,
        color: colors.black
      }
    }
  },
  dark: {
    standard: {
      default: {
        backgroundColor: colors.black,
        color: colors.white
      }
    }
  }
};

export default theme;
