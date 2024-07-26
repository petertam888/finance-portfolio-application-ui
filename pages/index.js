import Link from 'next/link';
import { Button } from "@/components/ui/button"
import * as React from "react"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-600 h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-8">Welcome to Portfolio Tracker</h1>
        <div className="max-w-md mx-auto bg-white bg-opacity-30 rounded-lg p-10 shadow-lg">
          <img src="/traderInPixelArt.png" alt="Trader Image" className="w-full rounded-lg mb-4" />
          <div className="text-xl font-semibold mb-4">Track your investments with ease</div>
          <p className="text-lg">Stay on top of your stock market investments and manage your portfolio effectively.</p>
          <div className="flex justify-center space-x-1">
            <Link href={`/portfolio`}>
              <Button variant="secondary" size="sm">Portfolio</Button>
            </Link>
            <Link href={`/add_transaction`}>
              <Button variant="secondary" size="sm">Add Transaction</Button>
            </Link>
            <Link href={`/add_dividend_record`}>
              <Button variant="secondary" size="sm">Add Dividend Record</Button>
            </Link>
            <Link href={`/check_transaction`}>
              <Button variant="secondary" size="sm">Check Transactions</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

















