import { useState } from 'react';
import formatNumber from '../action/formatNumber';
function PopUpCrypto({ price, name }: any) {
  const [showModal, setShowModal] = useState(false);
  const [amountInDollars, setAmountInDollars] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const closeModal = () => {
    setShowModal(false);
  };

  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };

  const handleAmountChange = (e: any) => {
    setAmountInDollars(e.target.value);
  };

  const convertAmount = () => {
    const amount = parseFloat(amountInDollars);
    if (!isNaN(amount)) {
      const converted = amount / price;
      setConvertedAmount(converted.toFixed(2));
    } else {
      setConvertedAmount('');
    }
  };

  return (
    <div>
      <button
        data-modal-target="staticModal"
        data-modal-toggle="staticModal"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <span className="rounded-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
          Buy now!
        </span>
      </button>

      {showModal && (
        <div
          id="staticModal"
          data-modal-backdrop="static"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur"
          onClick={closeModal}
        >
          <div
            className="glass2 rounded-lg shadow-lg p-4 w-full max-w-md mx-auto"
            onClick={stopPropagation}
          >
            <div className="relative">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Crypto Converter
              </h3>
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="staticModal"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-white dark:text-white">
                Price:{' '}
                {formatNumber(
                  price.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                    style: 'currency',
                    currency: 'USD',
                  }),
                )}
              </p>
              <div className="flex items-center justify-center flex-col">
                <label className="mr-2">You pay:</label>
                <br />
                <input
                  type="number"
                  step="10.00"
                  value={amountInDollars}
                  onChange={handleAmountChange}
                  className="border rounded py-1 px-2 text-cyan-950"
                />
              </div>
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                type="button"
                onClick={convertAmount}
              >
                <span className="rounded-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                  Convert
                </span>
              </button>
              {convertedAmount === '' ? null : (
                <h2 className="text-lg">
                  You get: {convertedAmount} in {name}
                </h2>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUpCrypto;
