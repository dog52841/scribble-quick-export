
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

interface FontSelectorProps {
  selectedFont: string;
  onFontSelect: (font: string) => void;
}

const handwritingFonts = [
  {
    id: "elegant-script",
    name: "Elegant Script",
    preview: "The quick brown fox jumps",
    style: "Flowing and sophisticated"
  },
  {
    id: "casual-handwriting",
    name: "Casual Handwriting", 
    preview: "The quick brown fox jumps",
    style: "Relaxed and natural"
  },
  {
    id: "neat-print",
    name: "Neat Print",
    preview: "The quick brown fox jumps", 
    style: "Clear and readable"
  },
  {
    id: "vintage-cursive",
    name: "Vintage Cursive",
    preview: "The quick brown fox jumps",
    style: "Classic and timeless"
  },
  {
    id: "modern-script",
    name: "Modern Script",
    preview: "The quick brown fox jumps",
    style: "Contemporary and stylish"
  }
];

export const FontSelector: React.FC<FontSelectorProps> = ({ selectedFont, onFontSelect }) => {
  return (
    <div className="space-y-4">
      <Select value={selectedFont} onValueChange={onFontSelect}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a handwriting style" />
        </SelectTrigger>
        <SelectContent>
          {handwritingFonts.map((font) => (
            <SelectItem key={font.id} value={font.id}>
              <div className="flex flex-col items-start">
                <span className="font-medium">{font.name}</span>
                <span className="text-sm text-muted-foreground">{font.style}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Font Preview Cards */}
      <div className="grid gap-3">
        {handwritingFonts.map((font) => (
          <Card 
            key={font.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-md ${
              selectedFont === font.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'
            }`}
            onClick={() => onFontSelect(font.id)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-sm">{font.name}</h4>
                <p className="text-xs text-muted-foreground">{font.style}</p>
              </div>
              <div 
                className="text-lg"
                style={{
                  fontFamily: getFontFamily(font.id),
                  color: '#374151'
                }}
              >
                {font.preview}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Helper function to map font IDs to actual font families
const getFontFamily = (fontId: string): string => {
  const fontMap: Record<string, string> = {
    "elegant-script": "Brush Script MT, cursive",
    "casual-handwriting": "Comic Sans MS, cursive", 
    "neat-print": "Trebuchet MS, sans-serif",
    "vintage-cursive": "Lucida Handwriting, cursive",
    "modern-script": "Dancing Script, cursive"
  };
  return fontMap[fontId] || "cursive";
};

export { getFontFamily };
