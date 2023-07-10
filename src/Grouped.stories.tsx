import type { Meta, StoryObj } from "@storybook/react";
import Grouped from "./Grouped";

// declaring the metadata for the Grouped component, which will be used by Storybook to render the component
const trafficLightsMeta: Meta<typeof Grouped> = {
  component: Grouped,
  title: "My Creation / Traffic Lights",
  // adding docs
  tags: ["autodocs"],
};

// declaring the type of the Storybook StoryObj
type TrafficLightsStoryType = StoryObj<typeof trafficLightsMeta>;

// declaring the default state of the component
export const Base: TrafficLightsStoryType = {
  args: {},
};

export default trafficLightsMeta;
