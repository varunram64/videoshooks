import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items && response.data.items.length ? response.data.items[0] : null);
    };

    useEffect(() => {
        onTermSubmit("new songs");
    }, []);

    return (
        <div className="ui container">
            <SearchBar onSearchSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                        onVideoSelect={setSelectedVideo} 
                        // Above and this is the same
                         //onVideoSelect={(video) => setSelectedVideo(video)} 
                        videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;