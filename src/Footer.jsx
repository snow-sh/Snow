export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 px-4">
      {/* <p className="text-lg font-semibold hover:text-gray-400 cursor-default transition-colors duration-300">
        &copy; 2025 Snow
      </p> */}
  <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Snow. All rights reserved.
      </p>
    </footer>
  );
}
