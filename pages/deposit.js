import AddDepositForm from '../components/AddDepositForm';
import { useRouter } from 'next/router';

export default function Deposit() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="absolute top-0 right-0 mt-8 mr-8">
        <button onClick={navigateToHome} className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-lg">
          Back to Home
        </button>
      </div>
      <div className="container">
        <AddDepositForm />
      </div>
    </div>
  );
}


