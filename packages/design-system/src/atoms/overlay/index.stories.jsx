import React from "react";
import { within, expect } from "storybook/test";
import Overlay from "atoms/overlay";
import overlayTheme from "atoms/overlay/theme";

export default {
  title: "Atoms/Overlay",
  component: Overlay,
  args: {
    effect: "none",
    height: "100%",
    isActive: false,
    positionY: "top",
    theme: overlayTheme,
    type: "screen",
    variant: "standard",
    width: "100%",
  },
};

export const Default = {
  play({ canvasElement }) {
    const canvas = within(canvasElement);

    const overlay = canvas.getByTestId("overlay");

    expect(overlay).toHaveStyle("display: none; position: fixed;");
  },
};

export const DefaultActive = {
  args: {
    isActive: true,
  },
  play({ canvasElement }) {
    const canvas = within(canvasElement);

    const overlay = canvas.getByTestId("overlay");

    expect(overlay).toHaveStyle(
      "display: block; position: fixed; top: 0; right: 0; bottom: 0; left: 0;"
    );
  },
};

export const TypeContent = {
  args: {
    type: "content",
  },
  render(args) {
    return (
      <div style={{ position: "relative" }}>
        <h1>A Title</h1>
        <p>Some content...</p>
        <Overlay {...args}>
          <span style={{ color: "#fff" }}>Overlay content...</span>
        </Overlay>
      </div>
    );
  },
  play({ canvasElement }) {
    const canvas = within(canvasElement);

    const overlay = canvas.getByTestId("overlay");

    expect(overlay).toHaveStyle("display: none; position: absolute;");
  },
};

export const TypeContentActive = {
  args: {
    type: "content",
    isActive: true,
  },
  render(args) {
    return (
      <div style={{ position: "relative" }}>
        <h1>A Title</h1>
        <p>Some content...</p>
        <Overlay {...args}>
          <span style={{ color: "#fff" }}>Overlay content...</span>
        </Overlay>
      </div>
    );
  },
  play({ canvasElement }) {
    const canvas = within(canvasElement);

    const overlay = canvas.getByTestId("overlay");

    expect(overlay).toHaveStyle(
      "display: block; position: absolute; top: 0; left: 0;"
    );
  },
};

export const TypeContentWithSlideUpEffect = {
  args: {
    type: "content",
    effect: "slideUp",
  },
  render(args) {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <h1>A Title</h1>
        <p>Some content...</p>
        <Overlay {...args}>
          <span style={{ color: "#fff" }}>Overlay content...</span>
        </Overlay>
      </div>
    );
  },
  play({ canvasElement }) {
    const canvas = within(canvasElement);

    const overlay = canvas.getByTestId("overlay");

    expect(overlay).toHaveStyle("display: block; position: absolute;");
  },
};

export const TypeContentWithSlideUpEffectActive = {
  args: {
    type: "content",
    isActive: true,
    effect: "slideUp",
  },
  render(args) {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <h1>A Title</h1>
        <p>Some content...</p>
        <Overlay {...args}>
          <span style={{ color: "#fff" }}>Overlay content...</span>
        </Overlay>
      </div>
    );
  },
  play({ canvasElement }) {
    const canvas = within(canvasElement);

    const overlay = canvas.getByTestId("overlay");

    expect(overlay).toHaveStyle(
      "display: block; position: absolute; top: 0; left: 0;"
    );
  },
};
