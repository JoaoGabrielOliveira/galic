import 'App.css';
import Card from 'components/Card';
import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import Chip from 'components/chip';

function App() {
  return (
    <main className="App">
      <Navbar />

      <Hero height="250px" background="https://wallpapercave.com/wp/wp7107842.jpg" noBorder>
        <header>
          + 2 friends are watching
        </header>

        <main>
          The Outsider
        </main>

        <footer>
          <button>
            Watch Now
          </button>
        </footer>
      </Hero>

      <div className='list'>
        <Card width="450px" height="250px" chipText="#1 Trending 🔥">
          Alou
        </Card>

        <Card>
        </Card>

        <Card>
        </Card>

        <Card>
        </Card>
      </div>
    </main>
  );
}

export default App;
