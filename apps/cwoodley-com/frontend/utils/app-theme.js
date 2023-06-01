import Color from 'color';

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

const headings = {
  serif: {
    default: {
      color: colors.blueYonder[400],
      family: "'Merriweather', serif",
      weight: "400"
    },
    reversed: {
      color: "#fff",
      family: "'Merriweather', serif",
      weight: "400"
    }
  },
  sans: {
    default: {
      color: "#000",
      family: "'Source Sans Pro', sans-serif",
      weight: "400"
    },
    reversed: {
      color: "#fff",
      family: "'Source Sans Pro', sans-serif",
      weight: "400"
    }
  }
};

const appTheme = {
  headings
};

export default appTheme;
