
import React from 'react';
import { Textarea } from '@/components/ui/textarea';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type your text here... It will be converted to beautiful handwriting!"
      className="min-h-[150px] text-lg leading-relaxed resize-none"
      maxLength={500}
    />
  );
};
