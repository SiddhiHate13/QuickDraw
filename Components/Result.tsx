interface ResultProps {
    score: number;
    onRestart: () => void;
    onClose: () => void;
  }
  
  const Result: React.FC<ResultProps> = ({ score, onRestart, onClose }) => {
    return (
      <div className="bg-white p-4 rounded shadow-lg text-center">
        <h2 className="text-2xl mb-4">Game Over</h2>
        <p className="text-lg mb-4">Your Score: {score}</p>
        <button
          onClick={onRestart}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Restart
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded mt-2"
        >
          Close
        </button>
      </div>
    );
  };
  
  export default Result;
  