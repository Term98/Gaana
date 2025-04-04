# 🎵 Gaana

A modern, responsive Spotify clone built with React, TypeScript, and SCSS. This application demonstrates advanced front-end development techniques including responsive design, state management, and smooth animations.


## ✨ Features

- 🎨 Modern, responsive UI that closely resembles Spotify
- 📱 Mobile-first design with smooth transitions
- 🔍 Real-time search functionality
- ❤️ Favorite tracks management with local storage
- 🎵 Recently played tracks tracking
- 🎨 Dynamic background colors based on current track
- 🔊 Playback controls (UI only)

## 🛠️ Technologies Used

- **React** - UI Framework
- **TypeScript** - Type Safety
- **SCSS** - Styling
- **Vite** - Build Tool
- **Lucide React** - Icons
- **Local Storage** - Data Persistence

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/spotify-clone.git
```

2. Navigate to the project directory:
```bash
cd spotify-clone
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📱 Responsive Design

The application is fully responsive and provides an optimal experience across different devices:

- 📱 Mobile devices (< 768px)
  - Bottom sheet player
  - Slide-up animation for full player view
  - Hamburger menu for navigation
  
- 💻 Desktop (> 768px)
  - Split view layout
  - Persistent sidebar navigation
  - Large format player

## 🎨 UI Components

### Main Components

1. **Sidebar Navigation**
   - Logo
   - Navigation links
   - Responsive collapse on mobile

2. **Song List**
   - Search functionality
   - Song information display
   - Favorite toggle
   - Active song indication

3. **Player**
   - Now playing information
   - Playback controls
   - Volume controls
   - Responsive layout

## 💾 Data Management

- **Favorites**: Stored in localStorage for persistence
- **Recently Played**: Managed in sessionStorage
- **Search**: Real-time filtering of songs
- **Current Song**: Managed through React state

## 🎨 Styling

The application uses SCSS with:
- Variables for consistent theming
- Nested selectors for maintainability
- Media queries for responsiveness
- Smooth transitions and animations

## 🔧 Project Structure

```
spotify-clone/
├── src/
│   ├── components/
│   ├── data/
│   │   └── songs.ts
│   ├── styles/
│   │   └── App.scss
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Design inspired by Spotify
- Icons from Lucide React
- Images from Unsplash# Gaana
