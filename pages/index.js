import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Welcome to Portfolio Tracker
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          Your personal finance companion for tracking investments and managing your portfolio with ease.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <FeatureCard
            title="Track Investments"
            description="Monitor your stocks, bonds, and other investments in real-time."
            icon="📈"
          />
          <FeatureCard
            title="Analyze Performance"
            description="Get insights into your portfolio's performance with detailed analytics."
            icon="📊"
          />
          <FeatureCard
            title="Manage Transactions"
            description="Easily record buy, sell, and dividend transactions."
            icon="💼"
          />
          <FeatureCard
            title="Set Goals"
            description="Define and track your financial goals with our goal-setting feature."
            icon="🎯"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/portfolio">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              View Portfolio
            </Button>
          </Link>
          <Link href="/add_transaction">
            <Button size="lg" variant="outline">
              Add Transaction
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

















