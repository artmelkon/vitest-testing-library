export default function Button({ color, isDisabled, onClick, children }) {
  const className = isDisabled ? "gray whiteFont" : color;

  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
}
