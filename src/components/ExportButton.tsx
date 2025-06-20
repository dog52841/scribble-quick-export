
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileImage, FileText } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

interface ExportButtonProps {
  text: string;
  font: string;
  onExport: () => void;
}

export const ExportButton: React.FC<ExportButtonProps> = ({ text, font, onExport }) => {
  
  const exportAsPNG = async () => {
    try {
      // Create a temporary canvas for export
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 800;
      canvas.height = 600;

      // White background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render text similar to preview
      const fontSize = 32;
      ctx.font = `${fontSize}px cursive`;
      ctx.fillStyle = '#1f2937';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';

      const lines = text.split('\n');
      const lineHeight = fontSize + 15;
      let y = 80;

      lines.forEach((line) => {
        if (line.trim()) {
          const words = line.split(' ');
          let x = 60;
          
          words.forEach((word) => {
            const randomOffsetX = (Math.random() - 0.5) * 3;
            const randomOffsetY = (Math.random() - 0.5) * 3;
            
            ctx.fillText(word, x + randomOffsetX, y + randomOffsetY);
            x += ctx.measureText(word + ' ').width;
          });
        }
        y += lineHeight;
      });

      // Download
      const link = document.createElement('a');
      link.download = 'handwriting.png';
      link.href = canvas.toDataURL();
      link.click();

      onExport();
      toast.success('PNG exported successfully!');
    } catch (error) {
      toast.error('Export failed. Please try again.');
    }
  };

  const exportAsPDF = async () => {
    try {
      // For now, we'll use the same canvas approach
      // In production, you'd want to use jsPDF for better PDF generation
      await exportAsPNG();
      toast.success('PDF export coming soon! PNG downloaded instead.');
    } catch (error) {
      toast.error('Export failed. Please try again.');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={exportAsPNG}>
          <FileImage className="w-4 h-4 mr-2" />
          Export as PNG
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportAsPDF}>
          <FileText className="w-4 h-4 mr-2" />
          Export as PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
