import React, { useRef, useEffect } from 'react';
import { PlayerContainer, ProgressBar, SongInfo, Controls } from './style';
import {
  PauseCircleFilled,
  PlayCircleFilled,
  StepBackwardFilled,
  StepForwardOutlined,
} from '@ant-design/icons';

interface MusicPlayerProps {
  songTitle: string;
  artist: string;
  albumCover: string;
  duration: number;
  currentTime: number;
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onVolumeChange: (volume: number) => void;
  onSeek: (position: number) => void;
  volume: number;
  isVisible: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  songTitle,
  artist,
  albumCover,
  duration,
  currentTime,
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
  onVolumeChange,
  onSeek,
  volume,
  isVisible,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressPercent = (currentTime / duration) * 100;

  useEffect(() => {
    audioRef.current = new Audio(albumCover);
    audioRef.current.volume = volume;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [albumCover]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error('播放错误:', err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const newPosition = (clickPosition / progressBar.offsetWidth) * duration;
    onSeek(newPosition);
    if (audioRef.current) {
      audioRef.current.currentTime = newPosition;
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <PlayerContainer
      style={{
        bottom: isVisible ? '0' : '-80px',
        transition: 'bottom 0.3s ease',
      }}
    >
      <SongInfo>
        <img src="src/assets/img/music-cover.jpg" alt="Album Cover" />
        <div>
          <h4>{songTitle}</h4>
          <p>{artist}</p>
        </div>
      </SongInfo>

      <ProgressBar>
        <div className="time-display">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="progress-track" onClick={handleProgressClick}>
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
          <div className="progress-handle" />
        </div>
      </ProgressBar>

      <Controls>
        <div className="volume-control">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={e => onVolumeChange(parseFloat(e.target.value))}
          />
        </div>
        <div className="play-controls">
          <StepBackwardFilled onClick={onPrevious} />
          {isPlaying ? (
            <PauseCircleFilled onClick={onPlayPause} />
          ) : (
            <PlayCircleFilled onClick={onPlayPause} />
          )}
          <StepForwardOutlined onClick={onNext} />
        </div>
      </Controls>
    </PlayerContainer>
  );
};

export default MusicPlayer;
