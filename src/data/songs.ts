export interface Song {
  id: string;
  title: string;
  artistName: string;
  thumbnail: string;
  musicUrl: string;
  duration: string;
  color?: string;
}

export const songs: Song[] = [
  {
    id: '1',
    title: 'Starboy',
    artistName: 'The Weekend',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500',
    musicUrl: 'https://example.com/starboy.mp3',
    duration: '4:16',
    color: '#2D3436'
  },
  {
    id: '2',
    title: 'Demons',
    artistName: 'Imagine Dragons',
    thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500',
    musicUrl: 'https://example.com/demons.mp3',
    duration: '5:24',
    color: '#E17055'
  },
  {
    id: '3',
    title: 'Mouth of the river',
    artistName: 'Imagine Dragons',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500',
    musicUrl: 'https://example.com/mouth-of-the-river.mp3',
    duration: '6:23',
    color: '#0984E3'
  },
  {
    id: '4',
    title: 'Ghost Stories',
    artistName: 'Coldplay',
    thumbnail: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500',
    musicUrl: 'https://example.com/ghost-stories.mp3',
    duration: '3:10',
    color: '#74B9FF'
  },
  // {
  //   id: '5',
  //   title: 'Sparks',
  //   artistName: 'Coldplay',
  //   thumbnail: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500',
  //   musicUrl: 'https://example.com/sparks.mp3',
  //   duration: '4:23',
  //   color: '#A8E6CF'
  // },
  // {
  //   id: '6',
  //   title: 'Viva La Vida',
  //   artistName: 'Coldplay',
  //   thumbnail: 'https://images.unsplash.com/photo-1614613534052-8c1d5e37c8e1?w=500',
  //   musicUrl: 'https://example.com/viva-la-vida.mp3',
  //   duration: '5:32',
  //   color: '#FFD3B6'
  // },
  // {
  //   id: '7',
  //   title: 'Hymn for the weekend',
  //   artistName: 'Coldplay',
  //   thumbnail: 'https://images.unsplash.com/photo-1614613533738-c2d9c2f7d55b?w=500',
  //   musicUrl: 'https://example.com/hymn-for-the-weekend.mp3',
  //   duration: '2:23',
  //   color: '#FFAAA5'
  // },
  // {
  //   id: '8',
  //   title: 'Pain',
  //   artistName: 'Ryan Jones',
  //   thumbnail: 'https://images.unsplash.com/photo-1614613532567-b0de42a9c061?w=500',
  //   musicUrl: 'https://example.com/pain.mp3',
  //   duration: '3:12',
  //   color: '#FF8B94'
  // }
];