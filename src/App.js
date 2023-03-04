import 'App.css';
import Card from 'components/Card';
import Navbar from 'components/Navbar';

function App() {
  return (
    <main className="App">
      <Navbar />

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
