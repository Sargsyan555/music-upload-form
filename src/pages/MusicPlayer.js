import React from 'react'
import '../style/MusicPlayer.css'
import PlayAllButtons from '../component/PlayAllButtons'
import AddAllButton from '../component/AddAllButton'
import TrackNumber from '../component/TrackNumber'
import SearchInput from '../component/SearchInput'
import MusicUploadForm from '../component/MusicUploadForm';
import SongList from '../component/SongList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function MusicPlayer() {
  return (
    <div className='musicPlayer'>
        <div className='nav'>
            <div className='add_play_buttons'>
                <PlayAllButtons />
                <AddAllButton />
            </div>

            <div className='queue_and_filter'>
                <TrackNumber />
                <SearchInput />
            </div>
        </div>
        <div>
          <SongList />
          <MusicUploadForm />
        </div>
    </div>
  )
}