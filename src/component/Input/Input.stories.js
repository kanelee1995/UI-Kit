import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

const myStyle = {
  width: "482px",
}

export const Default = () => <Input variant="Default" style={myStyle} label={"Your country"}></Input>;

