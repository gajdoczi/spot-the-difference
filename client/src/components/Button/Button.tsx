import "./Button.css";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="game-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;