import { Link } from "react-router-dom";
import { redirectAlert } from "../helpers/alerts";
import { removeLocalStorage } from "../helpers/local-storage";
function Header() {
  function logout() {
    removeLocalStorage("usuario");
    redirectAlert("Cerrando sesión", "Será redireccionado en ", "info", "/");
  }
  return (
    <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
      <div class="flex items-center gap-3 text-[#1142d4]">
        <div class="size-6">
          <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
          </svg>
        </div>
        <h2 class="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">
          Nexus ATS
        </h2>
      </div>

      <nav class="hidden md:flex items-center gap-8">
        <Link
          to="board"
          class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#1142d4] transition-colors"
        >
          Board
        </Link>
        <Link
          to="candidates"
          class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#1142d4] transition-colors"
        >
          Candidatos
        </Link>
        <Link
          to="create-candidate"
          class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#1142d4] transition-colors"
        >
          Crear Candidato
        </Link>
        <Link
          to="#"
          class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#1142d4] transition-colors"
        >
          Vacantes
        </Link>
      </nav>

      <div class="flex items-center gap-4">
        <Link
          to="/"
          class="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#1142d4] transition-colors"
        >
          Inicio
        </Link>
        <Link
          onClick={logout}
          class="bg-[#1142d4] hover:bg-[#1142d4]/90 text-white text-sm font-semibold py-2 px-5 rounded-[0.125rem] transition-colors"
        >
          Salir
        </Link>
      </div>
    </header>
  );
}

export default Header;
