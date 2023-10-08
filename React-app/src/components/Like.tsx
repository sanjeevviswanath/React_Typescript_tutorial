import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
  fillColor: "red" | "blue";
  size: number;
}
const Like = ({ onClick, fillColor,size }: Props) => {
  const [selectedStatus, setSelectedStatus] = useState(false);

  const toggle = () => {
    setSelectedStatus(!selectedStatus);
    onClick();
  };

  if (selectedStatus)
    return <AiFillHeart size={size} color={fillColor} onClick={toggle} />;
  return <AiOutlineHeart size={size} onClick={toggle} />;
};

export default Like;
