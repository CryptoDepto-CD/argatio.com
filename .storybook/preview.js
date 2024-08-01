import "../src/app/[locale]/globals.css";
import { themes } from "@storybook/theming";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      values: [
        {argatio: '#0B0B0B'}
      ]
    }
  },
};

export default preview;
