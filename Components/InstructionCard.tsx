interface InstructionCardProps {
    instruction: string;
    onStart: () => void;
  }
  
  const InstructionCard: React.FC<InstructionCardProps> = ({ instruction, onStart }) => {
    return (
      <div className="bg-white p-4 rounded shadow-lg text-center">
        <h2 className="text-xl mb-4">Draw: {instruction}</h2>
        <button
          onClick={onStart}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Start Drawing
        </button>
      </div>
    );
  };
  
  export default InstructionCard;
  