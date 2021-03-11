import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../Hooks/useVideos';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("New Songs");

    useEffect(() => {
        setSelectedVideo(videos ? videos[0] : null);
    }, [videos]);

    return (
        <div className="ui container">
            <SearchBar onSearchSubmit={search} />
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