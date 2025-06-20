
import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Type, Zap, Crown } from 'lucide-react';
import { toast } from 'sonner';
import { TextInput } from '@/components/TextInput';
import { FontSelector } from '@/components/FontSelector';
import { PreviewArea } from '@/components/PreviewArea';
import { ExportButton } from '@/components/ExportButton';
import { PlanBanner } from '@/components/PlanBanner';
import { PaywallModal } from '@/components/PaywallModal';

const Index = () => {
  const [text, setText] = useState("Hello World! This is a sample of beautiful handwriting.");
  const [selectedFont, setSelectedFont] = useState("elegant-script");
  const [showPaywall, setShowPaywall] = useState(false);
  const [userPlan, setUserPlan] = useState("free"); // This would come from auth context
  const [exportsUsed, setExportsUsed] = useState(2); // This would come from database

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Type className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">LazyWrite</h1>
            </div>
            <PlanBanner plan={userPlan} exportsUsed={exportsUsed} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Generate Beautiful Handwriting
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your typed text into realistic handwriting. Choose from our collection of 
              authentic handwriting fonts and export as high-quality images or PDFs.
            </p>
          </div>

          {/* App Interface */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Type className="w-5 h-5" />
                  Your Text
                </h3>
                <TextInput value={text} onChange={setText} />
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Handwriting Style
                </h3>
                <FontSelector 
                  selectedFont={selectedFont} 
                  onFontSelect={setSelectedFont} 
                />
              </Card>
            </div>

            {/* Preview Section */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Preview</h3>
                  <ExportButton 
                    text={text}
                    font={selectedFont}
                    onExport={() => {
                      if (userPlan === "free" && exportsUsed >= 5) {
                        setShowPaywall(true);
                      } else {
                        setExportsUsed(prev => prev + 1);
                        toast.success("Export successful!");
                      }
                    }}
                  />
                </div>
                <PreviewArea text={text} font={selectedFont} />
              </Card>

              {/* Features */}
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                <h3 className="text-lg font-semibold mb-4 text-blue-900">
                  Why Choose LazyWrite?
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Instant handwriting generation
                  </li>
                  <li className="flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Premium handwriting fonts
                  </li>
                  <li className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    High-quality PNG & PDF export
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Paywall Modal */}
      <PaywallModal 
        open={showPaywall} 
        onClose={() => setShowPaywall(false)} 
      />
    </div>
  );
};

export default Index;
