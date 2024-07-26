import AddDividendRecordForm from '../components/AddDividendForm';
import { useRouter } from 'next/router';

export default function AddDividendRecord() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-600 h-screen flex flex-col">
      {/* Page title and Back to Home button */}
      <div className="bg-blue-600 text-white px-4 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Add Dividend Record</h1>
          <button onClick={navigateToHome} className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
            Back to Home
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow flex">
        {/* Add Dividend Record Form */}
        <div className="w-full bg-gray-900 p-4">
          <h2 className="text-lg font-bold mb-2">DIVIDEND RECORD</h2>
          <AddDividendRecordForm />
        </div>
      </div>
    </div>
  );
}









