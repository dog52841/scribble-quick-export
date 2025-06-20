
import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { getFontFamily } from './FontSelector';

interface PreviewAreaProps {
  text: string;
  font: string;
}

export const PreviewArea: React.FC<PreviewAreaProps> = ({ text, font }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;

    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set up text rendering
    const fontSize = 24;
    ctx.font = `${fontSize}px ${getFontFamily(font)}`;
    ctx.fillStyle = '#1f2937';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    // Add some texture/paper effect
    ctx.fillStyle = '#f9fafb';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add subtle paper lines
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 60; i < canvas.height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(40, i);
      ctx.lineTo(canvas.width - 40, i);
      ctx.stroke();
    }

    // Render text with handwriting effect
    ctx.fillStyle = '#374151';
    const lines = text.split('\n');
    const lineHeight = fontSize + 10;
    let y = 70;

    lines.forEach((line, lineIndex) => {
      if (line.trim()) {
        const words = line.split(' ');
        let x = 50;
        
        words.forEach((word, wordIndex) => {
          // Add slight randomness to make it look more natural
          const randomOffsetX = (Math.random() - 0.5) * 2;
          const randomOffsetY = (Math.random() - 0.5) * 2;
          
          ctx.fillText(word, x + randomOffsetX, y + randomOffsetY);
          x += ctx.measureText(word + ' ').width;
        });
      }
      y += lineHeight;
    });

  }, [text, font]);

  return (
    <div className="bg-white rounded-lg p-4 shadow-inner">
      <canvas
        ref={canvasRef}
        className="w-full max-w-full border border-gray-200 rounded-lg"
        style={{ height: 'auto', maxHeight: '400px' }}
      />
    </div>
  );
};
