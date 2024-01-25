import logo from './logo.svg';
import './App.css';
import MusicPlayer from './pages/MusicPlayer';
import MusicUploadForm from './component/MusicUploadForm';
import SongList from './component/SongList';
function App() {
  return (
    <div className="App">
      <MusicPlayer />
      <SongList />
      <MusicUploadForm />
    </div>
  );
}

export default App;
