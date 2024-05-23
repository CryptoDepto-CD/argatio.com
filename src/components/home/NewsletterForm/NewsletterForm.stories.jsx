import { userEvent, within } from "@storybook/test";
import NewsletterForm from "./NewsletterForm";

export default {
  component: NewsletterForm,
  title: "Argatio/Home/NewsletterForm",
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
  }
}