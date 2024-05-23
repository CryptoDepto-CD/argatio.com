import { userEvent, waitFor, within } from "@storybook/test";
import ApplyForm from "./ApplyForm";

export default {
  component: ApplyForm,
  title: "Argatio/ViviendaPropia/Forms",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[800px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'argatio'
    }
  },
};

export const BuyerForm = {
  args: {
    type: "buyer",
  }
}

BuyerForm.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);
  
      await userEvent.type(document.querySelector('#name'), 'José Martinez', {delay: 100})
      await userEvent.type(document.querySelector('#email'), 'example@gmail.com', {delay: 100})
      await userEvent.type(document.querySelector('#phone'), '987654321', {delay: 100})
      await userEvent.type(document.querySelector('#location'), 'Peru', {delay: 100})
      await userEvent.selectOptions(document.querySelector('#propertyType'), "1")

      // await waitFor(async () => {
      //   await userEvent.click(canvas.getByText("Enviar"))
      // })
  }


export const PropertyForm = {
  args: {
    type: "property",
  }
}


PropertyForm.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);
  
      await userEvent.type(document.querySelector('#name'), 'José Martinez', {delay: 100})
      await userEvent.type(document.querySelector('#email'), 'example@gmail.com', {delay: 100})
      await userEvent.type(document.querySelector('#phone'), '987654321', {delay: 100})
      await userEvent.type(document.querySelector('#location'), 'Peru', {delay: 100})
      await userEvent.selectOptions(document.querySelector('#propertyType'), "1")
      await userEvent.type(document.querySelector('#price'), '400', {delay: 100})

      // await waitFor(async () => {
      //   await userEvent.click(canvas.getByText("Enviar"))
      // })
  }
