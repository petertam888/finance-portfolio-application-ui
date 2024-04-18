import Navbar from '../components/NavBar';

export default function Home() {
  return (
    <div className="container mx-auto text-center">
      <Navbar />
      <h1 className="text-4xl font-bold mt-8 text-blue-600">Portfolio Tracker</h1>
      <div className="mt-8">
        <img src="/traderInPixelArt.png" alt="Trader Image" className="w-full max-w-lg mx-auto" />
      </div>
    </div>
  );
}









