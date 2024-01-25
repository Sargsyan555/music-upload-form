import React from 'react'
import './MusicPlayer.css'
import PlayAllButtons from '../component/PlayAllButtons'
import AddAllButton from '../component/AddAllButton'
import TrackNumber from '../component/TrackNumber'
import SearchInput from '../component/SearchInput'
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
    </div>
  )
}