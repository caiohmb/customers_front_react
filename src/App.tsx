export default function App() {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Clientes</h1>

        <form className="flex flex-col my-6">
          <label className="text-white font-semibold">Nome do cliente</label>
          <input
            type="text"
            placeholder="Nome do cliente"
            className="w-full mt-2 p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 outline-none"
          />

          <label className="text-white font-semibold mt-4">E-mail</label>
          <input
            type="email"
            placeholder="E-mail do cliente"
            className="w-full mt-2 p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 outline-none"
          />

          <input type="submit" value="Adicionar cliente" className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded cursor-pointer transition-colors" />

        </form>

      </main>
    </div>
  )
}