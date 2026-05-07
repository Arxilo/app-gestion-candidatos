function EditCandidate() {
  return (
    <div className="bg-[#f6f6f8] dark:bg-[#101522] text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="px-6 lg:px-10 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold text-[#1142d4] bg-[#1142d4]/10 border border-[#1142d4]/20 inline-flex px-3 py-1 rounded-full">
                Candidatos
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Editar candidato
              </h1>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Modifica los datos del perfil.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">ID</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">
                1
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <section className="lg:col-span-12">
              <form className="rounded-[0.75rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Formulario</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Campos prellenados con un ejemplo basado en tu modelo.
                  </p>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-5">
                  <div className="md:col-span-6">
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Nombre completo</label>
                    <input
                      type="text"
                      defaultValue="Ana Martínez"
                      className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                    />
                  </div>

                  <div className="md:col-span-6">
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Email</label>
                    <input
                      type="email"
                      defaultValue="ana.martinez@gmail.com"
                      className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Teléfono</label>
                    <input
                      type="text"
                      defaultValue="+57 301 555 0101"
                      className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Ubicación</label>
                    <input
                      type="text"
                      defaultValue="Bogotá, CO"
                      className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Vacante (appliedOfferId)</label>
                    <input
                      type="number"
                      defaultValue="45"
                      className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Senioridad</label>
                    <select
                      defaultValue="Junior"
                      className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                    >
                      <option>Junior</option>
                      <option>Mid</option>
                      <option>Senior</option>
                      <option>Lead</option>
                    </select>
                  </div>

                  <div className="md:col-span-4">
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Años de experiencia</label>
                    <input
                      type="number"
                      defaultValue="1"
                      className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Estado</label>
                    <select
                      defaultValue="new"
                      className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                    >
                      <option>new</option>
                      <option>in_process</option>
                      <option>interview</option>
                      <option>offer</option>
                      <option>hired</option>
                      <option>rejected</option>
                    </select>
                  </div>

                  <div className="md:col-span-12">
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      Skills (separadas por coma)
                    </label>
                    <input
                      type="text"
                      defaultValue="React, JavaScript, HTML, CSS"
                      className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                    />
                  </div>

                  <div className="md:col-span-6">
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-400">ID</label>
                    <input
                      type="text"
                      defaultValue="1"
                      disabled
                      className="mt-2 w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-500 dark:text-slate-400 outline-none"
                    />
                  </div>

                  <div className="md:col-span-6">
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-400">createdAt</label>
                    <input
                      type="text"
                      defaultValue="2026-03-01T09:00:00.000Z"
                      disabled
                      className="mt-2 w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-500 dark:text-slate-400 outline-none"
                    />
                  </div>
                </div>

                <div className="px-6 py-5 bg-[#f6f6f8] dark:bg-[#101522] border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Guardado y navegación serán implementados después (solo diseño).
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-sm font-semibold py-2.5 px-5 rounded-[0.125rem] transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="bg-[#1142d4] hover:bg-[#1142d4]/90 text-white text-sm font-semibold py-2.5 px-5 rounded-[0.125rem] transition-colors"
                    >
                      Guardar cambios
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditCandidate
