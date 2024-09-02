"use client"
import { useState, useEffect } from 'react';
import DrawingCanvas from './DrawingCanvas';
import InstructionCard from './InstructionCard';
import Result from './Result';

const DrawingGame= () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);
  const [currentChallenge, setCurrentChallenge] = useState("");
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [timer, setTimer] = useState(10);

  const challenges = ["cat", "dog", "house", "tree", "car"];

  const startChallenge = () => {
    setGameStarted(true);
    setShowInstruction(true);
    setCurrentChallenge(challenges[Math.floor(Math.random() * challenges.length)]);
  };

  const nextRound = () => {
    if (round < 5) {
      setRound(round + 1);
      setShowInstruction(true);
      setCurrentChallenge(challenges[Math.floor(Math.random() * challenges.length)]);
      setTimer(10);
    } else {
      setGameStarted(false);
      setShowInstruction(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !showInstruction) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(interval);
            nextRound();
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, showInstruction]);

  const handleInstructionOk = () => {
    setShowInstruction(false);
  };

  const handleFinishDrawing = () => {
    // Implement your drawing recognition logic here
    // For simplicity, we'll assume the drawing is always correct
    setScore(score + 1);
    nextRound();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {!gameStarted && (
        <button
          onClick={startChallenge}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Start Challenge
        </button>
      )}

      {gameStarted && showInstruction && (
        <InstructionCard instruction={currentChallenge} onStart={handleInstructionOk} />
      )}

      {gameStarted && !showInstruction && (
        <div className="flex flex-col items-center">
          <p className="text-lg mb-2">Time left: {timer} seconds</p>
          <DrawingCanvas onFinish={handleFinishDrawing} />
        </div>
      )}

      {!gameStarted && round > 5 && (
        <Result
          score={score}
          onRestart={() => {
            setRound(1);
            setScore(0);
            setTimer(10);
            setGameStarted(false);
            setShowInstruction(true);
          }}
          onClose={() => {
            setRound(1);
            setScore(0);
            setTimer(10);
            setGameStarted(false);
            setShowInstruction(true);
          }}
        />
      )}
    </div>
  );
};

export default DrawingGame;
