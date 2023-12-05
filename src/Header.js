import {
  FaCompressArrowsAlt,
  FaExpandArrowsAlt,
  FaRegLightbulb,
} from "react-icons/fa";

export default function Header({ expand, setExpand, text }) {
  return (
    <div className="header">
      <FaRegLightbulb className="icon" />
      <p className="icon">{text}</p>
      {expand ? (
        <FaCompressArrowsAlt
          onClick={() => setExpand((st) => !st)}
          id="expand"
          className="icon"
        />
      ) : (
        <FaExpandArrowsAlt
          onClick={() => setExpand((st) => !st)}
          id="expand"
          className="icon"
        />
      )}
    </div>
  );
}
