
# 🖋️ LazyWrite - Beautiful Handwriting Generator

Transform your typed text into realistic handwriting with LazyWrite. Choose from our collection of authentic handwriting fonts and export as high-quality images or PDFs.

## ✨ Features

- **5 Beautiful Handwriting Fonts**: From elegant script to casual handwriting
- **Real-time Preview**: See your handwriting as you type
- **High-Quality Export**: Download as PNG or PDF
- **Responsive Design**: Works perfectly on desktop and mobile
- **Monetization Ready**: Stripe integration for Pro subscriptions

## 🚀 Tech Stack

- **Frontend**: React + Vite + TypeScript
- **UI**: TailwindCSS + shadcn/ui
- **Rendering**: HTML5 Canvas
- **Export**: Canvas API for image generation
- **Payments**: Stripe (ready for integration)
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd lazywrite
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

## 🎨 Available Fonts

1. **Elegant Script** - Flowing and sophisticated
2. **Casual Handwriting** - Relaxed and natural  
3. **Neat Print** - Clear and readable
4. **Vintage Cursive** - Classic and timeless
5. **Modern Script** - Contemporary and stylish

## 💳 Pricing Plans

### Free Plan
- 5 exports per day
- Access to all fonts
- PNG export

### Pro Plan ($10/month)
- Unlimited exports
- PNG & PDF export
- Priority support
- Early access to new fonts
- Custom font upload (coming soon)

## 🔧 Environment Variables

For Stripe integration, you'll need:

```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## 🚀 Deployment

This project is optimized for Vercel deployment:

1. Connect your GitHub repo to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy!

## 📱 Mobile Support

LazyWrite is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones

## 🛠️ Development

### Project Structure
```
src/
├── components/          # React components
│   ├── TextInput.tsx   # Text input area
│   ├── FontSelector.tsx# Font selection
│   ├── PreviewArea.tsx # Canvas preview
│   ├── ExportButton.tsx# Export functionality
│   ├── PlanBanner.tsx  # Subscription status
│   └── PaywallModal.tsx# Upgrade modal
├── pages/
│   └── Index.tsx       # Main app page
└── index.css          # Custom styles
```

### Adding New Fonts

1. Add font to Google Fonts in `index.html`
2. Update `fontMap` in `FontSelector.tsx`
3. Add font option to `handwritingFonts` array
4. Update CSS classes in `index.css`

## 🎯 Roadmap

- [ ] PDF export with jsPDF
- [ ] Custom font upload
- [ ] Batch text processing
- [ ] Templates and presets
- [ ] API for developers
- [ ] Mobile app

## 📄 License

MIT License - feel free to use for commercial projects!

---

Built with ❤️ for beautiful handwriting generation.
