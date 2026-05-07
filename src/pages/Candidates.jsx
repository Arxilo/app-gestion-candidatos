function Candidates() {
  return (
    <div className="bg-[#f6f6f8] dark:bg-[#101522] text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="px-6 lg:px-10 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold text-[#1142d4] bg-[#1142d4]/10 border border-[#1142d4]/20 inline-flex px-3 py-1 rounded-full">
                Módulo
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Candidatos
              </h1>
              <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">
                Listado general de candidatos registrados en el sistema.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                type="button"
                className="bg-[#1142d4] hover:bg-[#1142d4]/90 text-white text-sm font-semibold py-2.5 px-5 rounded-[0.125rem] transition-colors w-full sm:w-auto"
              >
                Crear candidato
              </button>
              <button
                type="button"
                className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-sm font-semibold py-2.5 px-5 rounded-[0.125rem] transition-colors w-full sm:w-auto"
              >
                Importar
              </button>
            </div>
          </div>

          <section className="rounded-[0.75rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Registros</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Acciones disponibles: editar y eliminar (solo visual).
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Total: 6
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-[#f6f6f8] dark:bg-[#101522] text-slate-600 dark:text-slate-400">
                  <tr>
                    <th className="text-left font-semibold px-6 py-3">Candidato</th>
                    <th className="text-left font-semibold px-6 py-3">Contacto</th>
                    <th className="text-left font-semibold px-6 py-3">Ubicación</th>
                    <th className="text-left font-semibold px-6 py-3">Nivel</th>
                    <th className="text-left font-semibold px-6 py-3">Estado</th>
                    <th className="text-left font-semibold px-6 py-3">Vacante</th>
                    <th className="text-left font-semibold px-6 py-3">Creado</th>
                    <th className="text-right font-semibold px-6 py-3">Acciones</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-[#1142d4]/10 border border-[#1142d4]/20" />
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">Ana Martínez</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">ID: 1</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-slate-700 dark:text-slate-200">ana.martinez@gmail.com</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">+57 301 555 0101</p>
                    </td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-200">Bogotá, CO</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">
                        Junior · 1 año
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#1142d4]/10 text-[#1142d4] border border-[#1142d4]/20">
                        new
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-200">#45</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">2026-03-01</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
                        >
                          <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.5 3.5C17.3284 2.67157 18.6716 2.67157 19.5 3.5C20.3284 4.32843 20.3284 5.67157 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Editar
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/30 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
                        >
                          <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 6L18 20C18 21.1046 17.1046 22 16 22H8C6.89543 22 6 21.1046 6 20L5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-emerald-500/10 border border-emerald-500/20" />
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">Juan Pérez</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">ID: 2</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-slate-700 dark:text-slate-200">juan.perez@gmail.com</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">+57 315 222 9020</p>
                    </td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-200">Medellín, CO</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">
                        Mid · 4 años
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 border border-amber-500/20 dark:text-amber-400">
                        in_process
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-200">#12</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">2026-03-09</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
                        >
                          <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.5 3.5C17.3284 2.67157 18.6716 2.67157 19.5 3.5C20.3284 4.32843 20.3284 5.67157 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Editar
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/30 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
                        >
                          <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 6L18 20C18 21.1046 17.1046 22 16 22H8C6.89543 22 6 21.1046 6 20L5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-amber-500/10 border border-amber-500/20" />
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">Valentina Gómez</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">ID: 3</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-slate-700 dark:text-slate-200">valentina.g@gmail.com</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">+57 300 110 8899</p>
                    </td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-200">Cali, CO</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">
                        Senior · 7 años
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 dark:text-emerald-400">
                        offer
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-200">#8</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">2026-02-14</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
                        >
                          <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.5 3.5C17.3284 2.67157 18.6716 2.67157 19.5 3.5C20.3284 4.32843 20.3284 5.67157 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Editar
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/30 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
                        >
                          <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 6L18 20C18 21.1046 17.1046 22 16 22H8C6.89543 22 6 21.1046 6 20L5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-[#f6f6f8] dark:bg-[#101522] border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs text-slate-600 dark:text-slate-400">Mostrando 3 de 6</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Candidates

