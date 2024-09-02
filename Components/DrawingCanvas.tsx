"use client"
import { useRef, useState, useEffect, MouseEvent } from 'react';

const DrawingCanvas= () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (event: MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const draw = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event.nativeEvent;
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.lineTo(offsetX, offsetY);
      context.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.closePath();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth * 0.8;
      canvas.height = window.innerHeight * 0.6;
      const context = canvas.getContext('2d');
      if (context) {
        context.strokeStyle = '#000';
        context.lineWidth = 2;
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className="border border-gray-300"
      />
    </div>
  );
};

export default DrawingCanvas;
