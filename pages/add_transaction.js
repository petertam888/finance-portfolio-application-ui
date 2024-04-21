import AddDepositForm from '../components/AddDepositForm';
import BuyStockForm from '../components/BuyStockForm';
import { useRouter } from 'next/router';

export default function Transaction() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Page title and Back to Home button */}
      <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-2">
        <h1 className="text-2xl font-bold">Create Transaction Record</h1>
        <button onClick={navigateToHome} className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
          Back to Home
        </button>
      </div>

      {/* Main content */}
      <div className="flex-grow flex">
        {/* Add Deposit Form */}
        <div className="w-1/2 bg-gray-600 p-4">
          <h2 className="text-lg font-bold mb-2">DEPOSIT</h2>
          <AddDepositForm />
        </div>

        {/* Buy Stock Form */}
        <div className="w-1/2 bg-gray-900 p-4">
          <h2 className="text-lg font-bold mb-2">STOCK RECORD</h2>
          <BuyStockForm />
        </div>
      </div>
    </div>
  );
}






