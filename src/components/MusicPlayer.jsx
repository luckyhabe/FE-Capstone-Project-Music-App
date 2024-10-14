import React, { useRef, useEffect, useState } from 'react';

function MusicPlayer({ currentTrack }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackDuration, setTrackDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.preview_url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkipToNext = (nextTrack) => {
    if (nextTrack && audioRef.current) {
      audioRef.current.src = nextTrack.preview_url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setTrackDuration(audioRef.current.duration);
  };

  return (
    <div className="mt-4">
      {currentTrack ? (
        <div>
          <h2 className="font-bold text-lg">Now Playing:</h2>
          <p>{currentTrack.name} by {currentTrack.artists.map(artist => artist.name).join(", ")}</p>
          <img src={currentTrack.album.images[0].url} alt={currentTrack.name} className="w-32" />
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => handleSkipToNext(currentTrack.next)} // Runs logic for next track if needed
            controls
          />
          <div className="flex space-x-4 mt-2">
            <button onClick={handlePlayPause} className="bg-blue-500 text-white p-2">
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
          <div>
            <p>Current Time: {Math.floor(currentTime)}s / {Math.floor(trackDuration)}s</p>
          </div>
        </div>
      ) : (
        <div>Select a track to play</div>
      )}
    </div>
  );
}

export default MusicPlayer;