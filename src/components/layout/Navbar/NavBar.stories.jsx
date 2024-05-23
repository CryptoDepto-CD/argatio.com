import NavBar from "./NavBar";

export default {
  component: NavBar,
  title: 'Argatio/Layout/NavBar',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-black">
        <Story />
      </div>
    )
  ]
};

export const Default = {};