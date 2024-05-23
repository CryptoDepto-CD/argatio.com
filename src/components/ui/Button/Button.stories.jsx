import Button from "@/components/ui/Button/Button";

export default {
  component: Button,
  title: 'Argatio/UI/Button',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '15rem',   }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    children: 'Button',
    type: 'button',
    onclick: function() {},
    href: '#'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '15rem', backgroundColor: 'black', padding: '1rem'  }}>
        <Story />
      </div>
    ),
  ],
}


export const ButtonLight = {
  args: {
    ...Default.args,
    light: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '15rem', backgroundColor: 'white', padding: '1rem'  }}>
        <Story />
      </div>
    ),
  ],
}

export const ButtonInvert = {
  args: {
    ...Default.args,
    invert: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '15rem', backgroundColor: 'white', padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}
