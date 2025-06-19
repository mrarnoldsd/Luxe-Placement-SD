import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Luxe Rehab Placement</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="p-4 bg-black text-white text-center text-xl font-bold">
        Luxe Rehab Placement
      </header>

      <section className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <h1 className="text-3xl text-white font-semibold bg-black bg-opacity-50 p-4 rounded">
          Find Hope. Start Healing Today.
        </h1>
      </section>

      <main className="p-4">
        <h2 className="text-xl font-semibold mb-2">Verify Your Insurance</h2>
        <form className="space-y-4">
          <input className="w-full p-2 border rounded" placeholder="Full Name" required />
          <input className="w-full p-2 border rounded" placeholder="Age" required type="number" />
          <input className="w-full p-2 border rounded" placeholder="Phone Number" required />
          <input className="w-full p-2 border rounded" placeholder="Insurance Provider" required />
          <textarea className="w-full p-2 border rounded" placeholder="What addiction are you struggling with?" rows="3" />
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Get Help Now
          </button>
        </form>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        © 2025 Luxe Rehab Placement. All rights reserved.
      </footer>
    </div>
  )
}