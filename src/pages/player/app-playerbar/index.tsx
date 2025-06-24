import React, { memo, useState, useEffect } from 'react';
import MusicPlayer from './MusicPlayer';

const AppPlayBar: React.FC = () => {
  const [currentSong] = useState({
    title: 'Lemon(中文版)',
    artist: '时代少年团',
    audioSrc: 'src/assets/music/lemon.mp3',
    duration: 93,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => Math.min(prev + 1, currentSong.duration));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentSong.duration]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY > window.innerHeight - 50) {
        setIsVisible(true);
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      } else {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

/**
 *函数名：播放停止 
 * 参数：无
 * 
 **/

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

/**
 *函数名：播放上一首
 * 参数：无
 * 
 **/
  const handlePrevious = () => {
    console.log('Previous song');
  };

/**
 *函数名：播放下一首
 * 参数：无
 * 
 **/

  const handleNext = () => {
    console.log('Next song');
  };

/**
 *函数名：播放音量
 * 参数：新声音
 * 
 **/

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    console.log('Volume changed to:', newVolume);
  };

/**
 *函数名：播放进度
 * 参数：新进度
 * 
 **/

  const handleSeek = (position: number) => {
    setCurrentTime(position);
    console.log('Seek to:', position);
  };

  return (
    <div className="app">
      <MusicPlayer
        songTitle={currentSong.title}
        artist={currentSong.artist}
        albumCover={currentSong.audioSrc}
        duration={currentSong.duration}
        currentTime={currentTime}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onVolumeChange={handleVolumeChange}
        onSeek={handleSeek}
        volume={volume}
        isVisible={isVisible}
      />
    </div>
  );
};

export default memo(AppPlayBar);
