export default function TextInput() {
  return (
    <input
      className="rounded border-2 border-solid border-indigo-400"
      type="text"
      onChange={event => console.log(event.target.value)}
    />
  );
}
