
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Crown, Zap } from 'lucide-react';

interface PlanBannerProps {
  plan: 'free' | 'pro';
  exportsUsed: number;
}

export const PlanBanner: React.FC<PlanBannerProps> = ({ plan, exportsUsed }) => {
  const maxExports = plan === 'free' ? 5 : Infinity;
  const remainingExports = plan === 'free' ? Math.max(0, maxExports - exportsUsed) : Infinity;

  return (
    <div className="flex items-center gap-4">
      {plan === 'free' && (
        <div className="text-sm text-gray-600">
          {remainingExports} exports remaining today
        </div>
      )}
      
      <Badge variant={plan === 'pro' ? 'default' : 'secondary'} className="flex items-center gap-1">
        {plan === 'pro' ? <Crown className="w-3 h-3" /> : <Zap className="w-3 h-3" />}
        {plan === 'pro' ? 'Pro' : 'Free'}
      </Badge>

      {plan === 'free' && (
        <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Crown className="w-4 h-4 mr-1" />
          Upgrade to Pro
        </Button>
      )}
    </div>
  );
};
