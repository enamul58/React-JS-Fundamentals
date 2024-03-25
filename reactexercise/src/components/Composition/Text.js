export function Text({ addEmoji, addBracket }) {
  let text = "i am javascript programming language";
  if (addEmoji) {
    text = addEmoji(text, "💜");
  }
  if (addBracket) {
    text = addBracket(text);
  }
  return <div>{text}</div>;
}
