# Cyber Quest 2077 - Pixel Arcade

A retro pixel-art themed Solana token landing page with an immersive game interface.

## Features

- 🎮 **Interactive Game Dashboard** - Character profile with stats and equipment
- ⚔️ **Combat Simulation** - Battle against rogue AI enemies
- 🗺️ **Tactical Map** - Explore sectors and find collectibles
- 💰 **Token Information** - Complete Solana token details and links
- 🎨 **Pixel Art Assets** - Custom pixel art graphics throughout
- 📱 **Fully Responsive** - Works on all devices

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling with custom pixel colors
- **Lucide React** - Icons
- **Press Start 2P** - Pixel font

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5174` (or the port shown in terminal)

### Build

```bash
npm run build
```

## Configuration

Edit the `TOKEN_CONFIG` object in `src/App.jsx` to customize:

- Token name and symbol
- Contract address
- Social media links (Telegram, Discord, Twitter)
- DexScreener and Pump.fun links

## Deployment

This project is configured for easy deployment on Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite settings
4. Deploy!

## Customization

### Colors

Edit `tailwind.config.js` to change the pixel color palette:
- `pixel-dark`: `#2d1b2e`
- `pixel-pink`: `#ff0055`
- `pixel-blue`: `#00e5ff`
- `pixel-yellow`: `#fff200`

### Assets

Replace images in the `public/` folder:
- `logo-cyber-quest.png` - Main logo
- `paladin-avatar.png` - Character avatar
- `rogue-ai-enemy.png` - Enemy sprite
- `rifle.png` - Weapon graphic
- `box.png` - Collectible crates
- `card.png` - Data card

## License

MIT
