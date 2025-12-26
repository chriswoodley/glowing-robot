import HamburgerButton from "atoms/hamburger-button";
import colors from "styles/utils/color/_export.module.scss";

export default {
  title: "Atoms/Hamburger Button",
  component: HamburgerButton,
  tags: ["autodocs"],
  args: {
    variant: "standard",
    "aria-label": "Open Navigation",
    isActive: false,
    theme: {
      standard: {
        default: {
          color: colors.black,
        },
      },
    },
  },
};

export const Default = {};

export const Active = {
  args: {
    isActive: true,
  },
};
