`use client`;

import Color from 'color';
import { Merriweather, Source_Sans_3, Source_Code_Pro } from 'next/font/google';

const merriweather = Merriweather({
  subsets: [ 'latin' ],
  weight: [ '300', '400', '700', '900' ],
  style: [ 'normal', 'italic' ],
  display: 'swap',
});

const sourceSansPro = Source_Sans_3({
  subsets: [ 'latin' ],
  weight: [ '200', '300', '400', '600', '700', '900' ],
  style: [ 'normal', 'italic' ],
  display: 'swap',
});

const sourceSansCode = Source_Code_Pro({
  subsets: [ 'latin' ],
  weight: [ '200', '300', '400', '600', '700', '900' ],
  style: [ 'normal', 'italic' ],
  display: 'swap',
});

const coolGrey = '#8592A6';
const blueYonder = '#5374A6';
const amounts = {
  200: 0.75,
  300: 0.5,
  400: 0.25,
  500: 0,
  600: 0.25,
  700: 0.5,
  800: 0.75
};
const colors = {
  coolGrey: {
    500: coolGrey
  },
  blueYonder: {
    500: blueYonder
  }
};

// light colors
for (let index = 4; index > 1; index--) {
  const key = index * 100;
  const amount = amounts[key];
  const cg = Color(coolGrey);
  const by = Color(blueYonder);
  const white = Color('#ffffff');

  colors.coolGrey[key] = cg.mix(white, amount).hex();
  colors.blueYonder[key] = by.mix(white, amount).hex();
}

// dark colors
for (let index = 6; index < 9; index++) {
  const key = index * 100;
  const amount = amounts[key];
  const cg = Color(coolGrey);
  const by = Color(blueYonder);
  const black = Color('#000000');

  colors.coolGrey[key] = cg.mix(black, amount).hex();
  colors.blueYonder[key] = by.mix(black, amount).hex();
}

const body = {
  standard: {
    default: {
      backgroundColor: colors.blueYonder[800],
      color: '#ffffff',
      family: sourceSansPro.style.fontFamily,
      weight: '300'
    }
  },
  monospaced: {
    default: {
      backgroundColor: colors.blueYonder[800],
      color: '#ffffff',
      family: sourceSansCode.style.fontFamily,
      weight: '300'
    }
  },

};

const mainNavLink = {
  standard: {
    default: {
      color: colors.coolGrey[400],
      weight: '400'
    }
  }
};

const mainNavOverlay = {
  standard: {
    default: {
      backgroundColor: colors.blueYonder[800]
    }
  }
};

const hamburgerButton = {
  standard: {
    default: {
      color: colors.blueYonder[400]
    }
  }
};

const footer = {
  standard: {
    default: {
      backgroundColor: colors.coolGrey[400],
      color: colors.blueYonder[700]
    }
  }
};

const headings = {
  serif: {
    default: {
      color: colors.blueYonder[400],
      family: merriweather.style.fontFamily,
      weight: "400"
    },
    reversed: {
      color: "#fff",
      family: merriweather.style.fontFamily,
      weight: "400"
    }
  },
  sans: {
    default: {
      color: "#000",
      family: sourceSansPro.style.fontFamily,
      weight: "400"
    },
    reversed: {
      color: "#fff",
      family: sourceSansPro.style.fontFamily,
      weight: "400"
    }
  }
};

const card = {
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
        backgroundColor: colors.coolGrey[800],
        color: colors.white
      }
    }
  }
};

const appTheme = {
  body,
  mainNavLink,
  mainNavOverlay,
  headings,
  hamburgerButton,
  footer,
  card
};

export { colors };

export default appTheme;
