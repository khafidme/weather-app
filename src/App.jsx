import "./App.css";

function App() {
  return (
    <>
      <main className="flex flex-col justify-between h-screen bg-gradient-to-b from-cyan-500 to-blue-400">
        <section className="w-full max-w-lg mx-auto p-6 text-white">
          <div className="flex justify-between">
            <div>
              <span className="font-semibold">MyWeather</span>
            </div>
            <div>
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path></svg>
              </button>
            </div>
          </div>
          <div className="p-8 flex flex-col items-center">
            <div>
              <img src="https://img.icons8.com/?size=200&id=g9gfDk0bIzCw&format=png" alt="" />
            </div>
            <div className="w-full mt-14 flex justify-around text-xl">
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M116,32V16a12,12,0,0,1,24,0V32a12,12,0,0,1-24,0Zm80,96a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM44,128a12,12,0,0,0-12-12H16a12,12,0,0,0,0,24H32A12,12,0,0,0,44,128Zm84,84a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V224A12,12,0,0,0,128,212Zm112-96H224a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"></path></svg>
                <span>24°</span>
              </div>
              <div className="text-center">
                <h1 className="text-6xl font-semibold">12°</h1>
                <p>Precipitations</p>
                <p>Max: 24°, Min:18°</p>
              </div>
              <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M244,96a12,12,0,0,1-12,12H220v12a12,12,0,0,1-24,0V108H184a12,12,0,0,1,0-24h12V72a12,12,0,0,1,24,0V84h12A12,12,0,0,1,244,96ZM144,60h4v4a12,12,0,0,0,24,0V60h4a12,12,0,0,0,0-24h-4V32a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24Zm75.81,90.38A12,12,0,0,1,222,162.3,100,100,0,1,1,93.7,34a12,12,0,0,1,15.89,13.6A85.12,85.12,0,0,0,108,64a84.09,84.09,0,0,0,84,84,85.22,85.22,0,0,0,16.37-1.59A12,12,0,0,1,219.81,150.38ZM190,172A108.13,108.13,0,0,1,84,66,76,76,0,1,0,190,172Z"></path></svg>
                <span>24°</span>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-lg mx-auto p-6 rounded-2xl bg-gray-50 text-gray-700">
          <div className="flex justify-between font-semibold">
            <div>Today</div>
            <div>July, 21</div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-1 mt-6 p-4 items-center rounded-xl bg-white shadow-lg">
              <img src="https://img.icons8.com/?size=50&id=g9gfDk0bIzCw&format=png" alt="" />
              <div className="mt-2 text-center">
                <p className="font-extrabold">12°C</p>
                <p className="text-sm text-gray-400">Now</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-6 p-4 items-center rounded-xl bg-white shadow-lg">
              <img src="https://img.icons8.com/?size=50&id=KDjKPrgADUUd&format=png" alt="" />
              <div className="mt-2 text-center">
                <p className="font-extrabold">12°C</p>
                <p className="text-sm text-gray-400">07.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-6 p-4 items-center rounded-xl bg-white shadow-lg">
              <img src="https://img.icons8.com/?size=50&id=GkzB2qzp1Ogf&format=png" alt="" />
              <div className="mt-2 text-center">
                <p className="font-extrabold">12°C</p>
                <p className="text-sm text-gray-400">08.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-6 p-4 items-center rounded-xl bg-white shadow-lg">
              <img src="https://img.icons8.com/?size=50&id=RWaaTjQ4JGUu&format=png" alt="" />
              <div className="mt-2 text-center">
                <p className="font-extrabold">12°C</p>
                <p className="text-sm text-gray-400">09.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-6 p-4 items-center rounded-xl bg-white shadow-lg">
              <img src="https://img.icons8.com/?size=50&id=RWaaTjQ4JGUu&format=png" alt="" />
              <div className="mt-2 text-center">
                <p className="font-extrabold">12°C</p>
                <p className="text-sm text-gray-400">10.00</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
