import React from 'react';
import TrackCard from './TrackList';

function TrackList({ tracks, onTrackSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tracks.length > 0 ? (
        tracks.map((track) => (
          <TrackCard key={track.id} track={track} onTrackSelect={onTrackSelect} />
        ))
      ) : (
        <div className="text-gray-500">No tracks found.</div>
      )}
    </div>
  );
}

export default TrackList;
