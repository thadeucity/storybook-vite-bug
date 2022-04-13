// packages/button/Button.stories.tsx
import { Button as ButtonComponent } from "../../Components/Buttons/Button";

export default {
  title: "Button",
};

const Template = (args: any) => (
  <ButtonComponent {...args}>Example button</ButtonComponent>
);

export const Button = Template.bind({});