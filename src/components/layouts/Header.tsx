// Header Layout Component
export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">English App</div>
          <div className="flex gap-4">
            <a href="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </a>
            <a href="/register" className="text-gray-700 hover:text-blue-600">
              Register
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
