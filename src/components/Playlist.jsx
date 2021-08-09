import React, { useState, useEffect } from 'react';
import PlaylistCard from './PlaylistCard';
import { PlaylistForm } from './PlaylistForm';
import { Button } from '@chakra-ui/react';
import { fetchData } from '../utils/restApiQueries';

const Playlist = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearch, setIsSearch] = useState(true);
  const [playlistId, setPlaylistId] = useState('');

  useEffect(() => {
    if (loading) fetchData(playlistId, setItems, setLoading, setIsSearch);
  }, [loading]);

  if (loading) return <p> Loading ... </p>;

  return (
    <>
      {isSearch ? (
        <PlaylistForm setPlaylistId={setPlaylistId} setLoading={setLoading} />
      ) : (
        <>
          <Button
            onClick={() => {
              setIsSearch(true);
            }}
            colorScheme="blue"
            m="auto"
            my={8}
          >
            Go Back
          </Button>
          {items.map(item => {
            return (
              <PlaylistCard
                image={item.track.album.images[1].url}
                name={item.track.name}
                popularity={item.track.popularity}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default Playlist;
