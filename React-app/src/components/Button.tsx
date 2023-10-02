//import { Children } from "react";

interface Props {
  children: String;
  onClick: () => void;

  //giving ? makes the property optional.
  // also instead of setting this as String, we can give set of valid values
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

function Button({ children, onClick, color }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
