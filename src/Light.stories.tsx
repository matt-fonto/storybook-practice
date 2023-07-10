import type { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

// metadata for the Light component, to be used by Storybook
const singleLightMeta: Meta<typeof Light> = {
  component: Light,
  title: "My Creation / Light",
  // adding docs
  tags: ["autodocs"],
  // specifying the props for the component
  argTypes: {
    // name of the prop
    color: {
      // type of the prop
      control: { type: "radio" },
      // options for the prop
      options: ["red", "yellow", "green"],
    },
  },
};

export default singleLightMeta;

// Story: a single state of the component
// StoryObj: a Story with metadata
// type NewType = TypeFromStorybook<typeof singleLight>;
type SingleLightType = StoryObj<typeof singleLightMeta>;

// Base: the default state of the component
// args: props for the component
export const RedLight: SingleLightType = {
  // props for the component
  args: {
    color: "red",
  },
};

export const YellowLight: SingleLightType = {
  args: {
    color: "yellow",
  },
};

export const GreenLight: SingleLightType = {
  args: {
    color: "green",
  },
};
