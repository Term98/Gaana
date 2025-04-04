import { useState, useEffect, useCallback } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Search, Heart, Music, ChevronLeft, Menu } from 'lucide-react';
import { songs, Song } from './data/songs';
import './styles/App.scss';

function App() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('for-you');
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showFullPlayer, setShowFullPlayer] = useState(false);
  const [favorites, setFavorites] = useState<Song[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [recentlyPlayed, setRecentlyPlayed] = useState<Song[]>(() => {
    const saved = sessionStorage.getItem('recentlyPlayed');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    sessionStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
  }, [recentlyPlayed]);

  useEffect(() => {
    if (currentSong) {
      document.documentElement.style.setProperty('--bg-color', currentSong.color || 'rgba(0,0,0,0.3)');
    }
  }, [currentSong]);

  const handlePlay = useCallback((song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setShowFullPlayer(true);
    
    setRecentlyPlayed(prev => {
      const filtered = prev.filter(s => s.id !== song.id);
      return [song, ...filtered].slice(0, 10);
    });
  }, []);

  const handleNext = useCallback(() => {
    if (!currentSong) return;
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    handlePlay(songs[nextIndex]);
  }, [currentSong, handlePlay]);

  const handlePrevious = useCallback(() => {
    if (!currentSong) return;
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    handlePlay(songs[previousIndex]);
  }, [currentSong, handlePlay]);

  const toggleFavorite = useCallback((song: Song) => {
    setFavorites(prev => {
      const isFavorite = prev.some(f => f.id === song.id);
      if (isFavorite) {
        return prev.filter(f => f.id !== song.id);
      }
      return [...prev, song];
    });
  }, []);

  const displayedSongs = (() => {
    let songList = songs;
    
    if (activeTab === 'favorites') {
      songList = favorites;
    } else if (activeTab === 'recently-played') {
      songList = recentlyPlayed;
    }
    
    if (searchQuery) {
      return songList.filter(song => 
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artistName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return songList;
  })();

  return (
    <div className="app-container">
      <div className={`sidebar ${showMobileNav ? 'show' : ''}`}>
        <div className="logo">
          <Music size={32} />
          <span className="text-2xl font-bold">Gaana</span>
        </div>
        <ul className="nav-links">
          <li 
            className={activeTab === 'for-you' ? 'active' : ''} 
            onClick={() => {
              setActiveTab('for-you');
              setShowMobileNav(false);
            }}
          >
            For You
          </li>
          <li 
            className={activeTab === 'favorites' ? 'active' : ''} 
            onClick={() => {
              setActiveTab('favorites');
              setShowMobileNav(false);
            }}
          >
            Favourites
          </li>
          <li 
            className={activeTab === 'recently-played' ? 'active' : ''} 
            onClick={() => {
              setActiveTab('recently-played');
              setShowMobileNav(false);
            }}
          >
            Recently Played
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className={`songs-section ${showFullPlayer ? 'hidden-mobile' : ''}`}>
          <div className="mobile-header">
            <button className="menu-button" onClick={() => setShowMobileNav(true)}>
              <Menu size={24} />
            </button>
            <h2>{activeTab === 'favorites' ? 'Favourites' : activeTab === 'recently-played' ? 'Recently Played' : 'For You'}</h2>
          </div>

          <div className="search-bar">
            <div className="search-input-wrapper">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search songs, artists"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="song-list">
            {displayedSongs.map(song => (
              <div 
                key={song.id} 
                className={`song-item ${currentSong?.id === song.id ? 'active' : ''}`} 
                onClick={() => handlePlay(song)}
              >
                <img src={song.thumbnail} alt={song.title} />
                <div className="song-info">
                  <div className="title">{song.title}</div>
                  <div className="artist">{song.artistName}</div>
                </div>
                <div className="duration">{song.duration}</div>
                <button 
                  className="favorite-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(song);
                  }}
                >
                  <Heart 
                    fill={favorites.some(f => f.id === song.id) ? '#1DB954' : 'none'}
                    color={favorites.some(f => f.id === song.id) ? '#1DB954' : '#B3B3B3'}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {currentSong && (
          <div className={`now-playing-section ${showFullPlayer ? 'show-full' : ''}`} onClick={() => setShowFullPlayer(true)}>
            <div className="mobile-player-header">
  <div className="mobile-header-buttons">
    <button className="menu-button" onClick={(e) => {
      e.stopPropagation();
      setShowMobileNav(true);
    }}>
      <Menu size={24} />
    </button>
    
    {showFullPlayer && (
      <button className="back-button" onClick={(e) => {
        e.stopPropagation();
        setShowFullPlayer(false);
      }}>
        <ChevronLeft size={24} />
      </button>
    )}
  </div>
  <div className="song-info">
    <h1 className="song-title">{currentSong.title}</h1>
    <p className="artist-name">{currentSong.artistName}</p>
  </div>
</div>

            <img className="artwork" src={currentSong.thumbnail} alt={currentSong.title} />
            <div className="playback-controls">
              <button onClick={handlePrevious}><SkipBack /></button>
              <button 
                className="play-pause"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying);
                }}
              >
                {isPlaying ? <Pause /> : <Play />}
              </button>
              <button onClick={handleNext}><SkipForward /></button>
            </div>
            <div className="volume-controls">
              <button><Volume2 /></button>
            </div>
          </div>
        )}
      </div>

      {showMobileNav && (
        <div className="mobile-nav-overlay" onClick={() => setShowMobileNav(false)} />
      )}
    </div>
  );
}

export default App;