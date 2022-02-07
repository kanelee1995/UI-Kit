import React from "react";
// import { addDecorator } from "@storybook/react";
import Center from "../src/component/Center/Center";

// addDecorator((story) => <Center>{story()}</Center>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [(Story) => <Center>{Story()}</Center>];