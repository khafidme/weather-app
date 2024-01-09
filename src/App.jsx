import "./App.css";

function App() {
  return (
    <>
      <main className="flex flex-col justify-between h-full bg-gradient-to-b from-cyan-500 to-blue-400">
        <section className="w-full max-w-lg mx-auto p-6 text-white">
          <div className="flex justify-between drop-shadow-md">
            <div>
              <span className="font-semibold">MyWeather</span>
            </div>
            <div className="drop-shadow-md">
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path></svg>
              </button>
            </div>
          </div>
          <div className="p-8 flex flex-col items-center">
            <div className="text-center">
              <h1 className="mb-3 text-2xl font-semibold drop-shadow-lg">Yogyakarta, ID</h1>
              <div className="flex justify-center">
                <img src="/assets/images/cloud2400.png" width={400} alt="" />
              </div>
            </div>
            <div className="w-full flex justify-around -mt-10 text-xl drop-shadow-md">
              <div className="flex gap-2 mt-4 opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M116,32V16a12,12,0,0,1,24,0V32a12,12,0,0,1-24,0Zm80,96a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM44,128a12,12,0,0,0-12-12H16a12,12,0,0,0,0,24H32A12,12,0,0,0,44,128Zm84,84a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V224A12,12,0,0,0,128,212Zm112-96H224a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"></path></svg>
                <span className="text-2xl">34°</span>
              </div>
              <div className="text-center">
                <h1 className="mb-6 text-6xl font-semibold">27°</h1>
                <p className="opacity-80">Precipitations</p>
                <p className="opacity-80">Max: 24°, Min:18°</p>
              </div>
              <div className="flex gap-2 mt-4 opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M244,96a12,12,0,0,1-12,12H220v12a12,12,0,0,1-24,0V108H184a12,12,0,0,1,0-24h12V72a12,12,0,0,1,24,0V84h12A12,12,0,0,1,244,96ZM144,60h4v4a12,12,0,0,0,24,0V60h4a12,12,0,0,0,0-24h-4V32a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24Zm75.81,90.38A12,12,0,0,1,222,162.3,100,100,0,1,1,93.7,34a12,12,0,0,1,15.89,13.6A85.12,85.12,0,0,0,108,64a84.09,84.09,0,0,0,84,84,85.22,85.22,0,0,0,16.37-1.59A12,12,0,0,1,219.81,150.38ZM190,172A108.13,108.13,0,0,1,84,66,76,76,0,1,0,190,172Z"></path></svg>
                <span className="text-2xl">24°</span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full max-w-lg mx-auto p-6 rounded-t-2xl bg-gray-50 text-gray-700">
          <div className="flex justify-between font-semibold">
            <div>Today</div>
            <div>July, 21</div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-1 mt-6 py-4 px-6 items-center rounded-xl bg-gradient-to-b from-cyan-500 to-blue-400 shadow-lg">
              <div className="h-12 flex justify-center">
                <img className="absolute" src="/assets/images/cloud2400.png" width={75} alt="" />
              </div>
              <div className="mt-2 text-center text-white">
                <p className="text-xl font-bold">27°C</p>
                <p className="text-sm text-gray-100">Now</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-6 py-4 px-6 items-center rounded-xl bg-gradient-to-b from-cyan-500 to-blue-400 shadow-lg">
              <div className="h-12 flex justify-center">
                <img className="absolute" src="/assets/images/rain400.png" width={75} alt="" />
              </div>
              <div className="mt-2 text-center text-white">
                <p className="text-xl font-bold">25°C</p>
                <p className="text-sm text-gray-100">01.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-6 py-4 px-6 items-center rounded-xl bg-gradient-to-b from-cyan-500 to-blue-400 shadow-lg">
              <div className="h-12 flex justify-center">
                <img className="absolute" src="/assets/images/suncloud400.png" width={75} alt="" />
              </div>
              <div className="mt-2 text-center text-white">
                <p className="text-xl font-bold">30°C</p>
                <p className="text-sm text-gray-100">02.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-6 py-4 px-6 items-center rounded-xl bg-gradient-to-b from-cyan-500 to-blue-400 shadow-lg">
              <div className="h-12 flex justify-center">
                <img className="absolute" src="/assets/images/sun400.png" width={75} alt="" />
              </div>
              <div className="mt-2 text-center text-white">
                <p className="text-xl font-bold">32°C</p>
                <p className="text-sm text-gray-100">03.00</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
