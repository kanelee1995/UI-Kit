import Button from "./Button";
// import DarkBackground from "../Center/DarkBackground";
// import Center from "../Center/Center";

export default {
  title: "Button",
  component: Button,
  // decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => <Button variant="Primary">Click!</Button>;

export const White = () => (
  // <DarkBackground>
  <Button variant="White">Click!</Button>
  // </DarkBackground>
);
export const Flat = () => <Button variant="Flat">Click!</Button>;

export const FlatWhite = () => (
  // <DarkBackground>
  <Button variant="FlatWhite">Click!</Button>
  // </DarkBackground>
);
