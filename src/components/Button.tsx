export default function Button() {
  return (
    <div>
      <button
        className="rounded-full bg-indigo-400 px-5 py-2 text-white hover:bg-indigo-600 focus:outline-none active:bg-indigo-700"
        onClick={() => {
          console.log("Button clicked");
        }}
      >
        Submit
      </button>
    </div>
  );
}
