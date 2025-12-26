import React from "react";
import { within, userEvent, waitFor, expect } from "storybook/test";
import Overlay from "atoms/overlay";
import ContentOverlay from "molecules/content-overlay";
import contentOverlayTheme from "molecules/content-overlay/theme";

export default {
  title: "Molecules/Content Overlay",
  component: ContentOverlay,
  tags: ["autodocs"],
  args: {
    theme: contentOverlayTheme,
    triggerType: "click",
    variant: "standard",
  },
};

export const DefaultWithDefaultOverlay = {
  render(args) {
    return (
      <ContentOverlay
        {...args}
        renderOverlay={({ isActive }) => (
          <Overlay isActive={isActive}>My Overlay here</Overlay>
        )}
      >
        <p>Some content here...</p>
      </ContentOverlay>
    );
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    const content = canvas.getByTestId("content");
    const overlay = canvas.getByTestId("overlay");

    await expect(overlay).toHaveStyle("display: none; position: fixed;");
    await userEvent.click(content);
    await expect(overlay).toHaveStyle("display: block; position: fixed;");
    await userEvent.click(content);
    await expect(overlay).toHaveStyle("display: none; position: fixed;");
  },
};

export const DefaultWithContentOverlay = {
  render(args) {
    return (
      <ContentOverlay
        {...args}
        renderOverlay={({ isActive }) => (
          <Overlay isActive={isActive} type="content">
            My Overlay here
          </Overlay>
        )}
      >
        <p>Some content here...</p>
      </ContentOverlay>
    );
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    const content = canvas.getByTestId("content");
    const overlay = canvas.getByTestId("overlay");

    await expect(overlay).toHaveStyle("display: none; position: absolute;");
    await userEvent.click(content);
    await expect(overlay).toHaveStyle("display: block; position: absolute;");
    await userEvent.click(content);
    await expect(overlay).toHaveStyle("display: none; position: absolute;");
  },
};

export const DefaultWithContentOverlayOnHover = {
  args: {
    triggerType: "hover",
  },
  render(args) {
    return (
      <ContentOverlay
        {...args}
        renderOverlay={({ isActive }) => (
          <Overlay isActive={isActive} type="content">
            My Overlay here
          </Overlay>
        )}
      >
        <p>Some content here...</p>
      </ContentOverlay>
    );
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    const content = canvas.getByTestId("content");
    const overlay = canvas.getByTestId("overlay");

    await expect(overlay).toHaveStyle("display: none; position: absolute;");
    await userEvent.hover(content);
    await expect(overlay).toHaveStyle("display: block; position: absolute;");
    await userEvent.unhover(content);
    await expect(overlay).toHaveStyle("display: none; position: absolute;");
  },
};

export const DefaultWithContentOverlayOnHoverSlideUp = {
  args: {
    triggerType: "hover",
  },
  render(args) {
    return (
      <ContentOverlay
        {...args}
        renderOverlay={({ isActive }) => (
          <Overlay isActive={isActive} type="content" effect="slideUp">
            My Overlay here
          </Overlay>
        )}
      >
        <p>Some content here...</p>
      </ContentOverlay>
    );
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement);
    const content = canvas.getByTestId("content");
    const overlay = canvas.getByTestId("overlay");
    const height = overlay.getBoundingClientRect().height;

    await expect(overlay).toHaveStyle(
      `display: block; position: absolute; bottom: -${height}px`
    );
    await userEvent.hover(content);
    await waitFor(function transition() {
      return expect(overlay).toHaveStyle(
        "display: block; position: absolute; bottom: 0px;"
      );
    });
    await userEvent.unhover(content);
    await waitFor(function transition() {
      return expect(overlay).toHaveStyle(
        `display: block; position: absolute; bottom: -${height}px`
      );
    });
  },
};

export const DefaultWithContentOverlayOnHoverSlideUpAutoHeight = {
  args: {
    triggerType: "hover",
  },
  render(args) {
    return (
      <ContentOverlay
        {...args}
        renderOverlay={({ isActive }) => (
          <Overlay
            isActive={isActive}
            type="content"
            effect="slideUp"
            height="auto"
          >
            My Overlay here
          </Overlay>
        )}
      >
        <h1>My Title</h1>
        <p>Some content here...</p>
      </ContentOverlay>
    );
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement);
    const content = canvas.getByTestId("content");
    const overlay = canvas.getByTestId("overlay");
    const overlayHeight = overlay.getBoundingClientRect().height;
    const contentHeight = content.getBoundingClientRect().height;

    await expect(content).toHaveStyle(`height: ${contentHeight}px`);
    await expect(overlay).toHaveStyle(
      `display: block; position: absolute; bottom: -${contentHeight}px; height: ${overlayHeight}px;`
    );
    await userEvent.hover(content);
    await waitFor(function transition() {
      return expect(overlay).toHaveStyle(
        `display: block; position: absolute; bottom: 0px; height: ${overlayHeight}px;`
      );
    });
    await userEvent.unhover(content);
    await waitFor(function transition() {
      return expect(overlay).toHaveStyle(
        `display: block; position: absolute; bottom: -${contentHeight}px; height: ${overlayHeight}px;`
      );
    });
  },
};
