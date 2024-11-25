import React, { useState } from 'react';
import axios from 'axios';
import { useBackendUrl } from '../context/BackendUrlContext';
import { Calendar } from "@/components/ui/calendar";

const AddDividendRecordForm = () => {
  const { backendUrl } = useBackendUrl();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [stockCode, setStockCode] = useState('');
  const [dividendByShares, setDividendByShares] = useState('');
  const [dividendByCash, setDividendByCash] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;
      const day = selectedDate.getDate();

      const data = {};
      if (dividendByShares) data.dividendByShares = parseFloat(dividendByShares);
      if (dividendByCash) data.dividendByCash = parseFloat(dividendByCash);

      const response = await axios.post(`${backendUrl}/api/transaction/1/dividend_record/${year}_${month}_${day}/${stockCode}`, data);

      if (response.status === 200) {
        alert('Dividend record added successfully!');
        setSelectedDate(new Date());
        setStockCode('');
        setDividendByShares('');
        setDividendByCash('');
      }
    } catch (error) {
      setErrorMessage('Failed to add dividend record. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="transactionDate">Transaction Date</label>
          <div className="flex">
            <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center text-black",
                  caption_label: "text-sm font-medium",
                  nav: "space-x-1 flex items-center",
                  nav_button: "h-7 w-7 bg-transparent p-0 text-black hover:bg-gray-100",
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex w-full",
                  head_cell: "text-black w-10 font-medium text-[0.8rem] text-center",
                  row: "flex w-full mt-2",
                  cell: "text-center text-sm relative w-10 h-10 hover:bg-gray-100 focus-within:relative focus-within:z-20",
                  day: "h-10 w-10 p-0 font-normal text-gray-500 hover:bg-gray-100",
                  day_selected: "bg-blue-500 text-white hover:bg-blue-600",
                  day_today: "bg-gray-100 text-black",
                  day_outside: "text-gray-300 opacity-50"
                }}
              />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="stockCode">Stock Code</label>
          <input
            id="stockCode"
            type="text"
            value={stockCode}
            onChange={(e) => setStockCode(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
            placeholder="Enter stock code"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dividendByShares">Dividend by Shares</label>
          <input
            id="dividendByShares"
            type="number"
            value={dividendByShares}
            onChange={(e) => setDividendByShares(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
            placeholder="Enter dividend by shares"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dividendByCash">Dividend by Cash</label>
          <input
            id="dividendByCash"
            type="number"
            value={dividendByCash}
            onChange={(e) => setDividendByCash(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
            placeholder="Enter dividend by cash"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Add Dividend Record
        </button>
      </form>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default AddDividendRecordForm;












