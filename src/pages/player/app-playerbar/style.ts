import styled from 'styled-components';

export const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #282828;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 100;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
`;

export const SongInfo = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  min-width: 200px;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 15px;
    border-radius: 4px;
  }

  h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #b3b3b3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ProgressBar = styled.div`
  flex: 1;
  padding: 0 20px;

  .time-display {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #b3b3b3;
    margin-bottom: 5px;
  }

  .progress-track {
    height: 4px;
    background-color: #404040;
    border-radius: 2px;
    position: relative;
    cursor: pointer;

    &:hover .progress-handle {
      transform: scale(1.2);
    }
  }

  .progress-fill {
    height: 100%;
    background-color: #1ed760;
    border-radius: 2px;
    transition: width 0.1s linear;
  }

  .progress-handle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(0);
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
  }

  .progress-track:hover .progress-handle {
    transform: translateY(-50%) scale(1);
  }

  .progress-tooltip {
    position: absolute;
    bottom: 15px;
    padding: 3px 6px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 11px;
    border-radius: 3px;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
  }

  .progress-track:hover .progress-tooltip {
    opacity: 1;
  }
`;

export const Controls = styled.div`
  width: 25%;
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .volume-control {
    display: flex;
    align-items: center;
    width: 40%;

    svg {
      margin-right: 10px;
      color: #b3b3b3;
    }

    input {
      width: 100%;
      height: 3px;
      -webkit-appearance: none;
      background-color: #404040;
      border-radius: 3px;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: white;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      &::-webkit-slider-thumb:hover {
        background-color: #1ed760;
        transform: scale(1.1);
      }
    }
  }

  .play-controls {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: space-around;

    svg {
      font-size: 24px;
      color: white;
      cursor: pointer;
      transition: all 0.15s ease;

      &:hover {
        color: #1ed760;
        transform: scale(1.1);
      }
    }
  }
`;

export const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 12px;
  color: #b3b3b3;
`;
