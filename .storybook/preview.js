import React from "react";
// import { addDecorator } from "@storybook/react";
import Global from "../src/component/Global/Global";

// addDecorator((story) => <Center>{story()}</Center>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "grey",
    values: [
      {
        name: "grey",
        value: "#D7D7D7",
      },
    ],
  },
};

export const decorators = [(Story) => <Global>{Story()}</Global>];
