import { useState, useEffect } from "react";
import { api } from "./services/api";

export default function App() {

  useEffect(() => {
    fetchCustomers();
  }, []);


  async function fetchCustomers() {
    try {
      const response = await api.get("/customers");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  }


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

          <input 
          type="submit" 
          value="Adicionar cliente" 
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded cursor-pointer transition-colors" />

        </form>



        <section className="flex flex-col">

          <article className="bg-gray-800 p-4 rounded mb- text-white">

            <p><span className="font-medium">Nome:</span> Caio</p>
            <p><span className="font-medium">Email:</span> email@test.com</p>
            <p><span className="font-medium">Status:</span> ATIVO</p>

            <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded cursor-pointer transition-colors">
              Remover cliente
            </button>
          </article>
        </section>

      </main>
    </div>
  )
}