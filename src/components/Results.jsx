const Results = ({ isOpen, onClose, likelyDisease }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Most Likely Disease</h2>
        <p className="text-lg">{likelyDisease}</p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Results;
