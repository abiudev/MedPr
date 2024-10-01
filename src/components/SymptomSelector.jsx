export default function Data({ title, handleClick, visible, children }) {
  return (
    <div className="max-w-md mx-auto mb-4 flex flex-col items-center border border-green-500 rounded-lg shadow-lg p-4">
      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={handleClick}
          className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {visible ? " -" : "+"}
        </button>
        <h1 className="text-2xl font-roboto-condensed">{title}</h1>
      </div>
      {visible && <div className="grid grid-cols-1 gap-2">{children}</div>}{" "}
      {/* Render children based on visibility */}
    </div>
  );
}
