import { userEvent, within } from "@storybook/test";
import FeedbackForm from "./FeedbackForm";

export default {
  component: FeedbackForm,
  title: "Argatio/Home/FeedbackForm",
  tags: ["autodocs"],
  decorators: [(Story)=> (
    <div className="max-w-screen-sm">
      <Story />
    </div>
  )]
}

export const Default = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    
    await userEvent.type(document.querySelector('#email'), 'example@gmail.com', {delay: 100})
    await userEvent.type(document.querySelector('#feedback'), 'El proyecto se ve muy interesante', {delay: 100})
  }
}