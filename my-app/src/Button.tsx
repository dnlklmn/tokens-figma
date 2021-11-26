import { default as tokens } from "./tokens.json";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <div
      style={{
        background: `#${tokens.global.Primary.value}`,
        padding: `${Number(tokens.global["space-m"].value)}px ${Number(
          tokens.global["space-l"].value
        )}px`,
        borderRadius: 8,
        boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
      }}
    >
      {text}
    </div>
  );
};

Button.defaultProps = {
  text: "Book now",
  size: "",
  stretch: false,
  withIcon: "before",
  icon: "box",
  variant: "contained",
  color: "primary",
  disabled: false,
};
