import { Link, useRouterState } from '@tanstack/react-router';

export function Header() {
    const { location } = useRouterState();
    const currentRoute = location.pathname;

    return (
        <header className="bg-white shadow-md mb-6">
            <div className="container mx-auto px-6 py-5">
                <div className="flex justify-center">
                    <nav className="flex space-x-8">
                        <Link
                            to="/"
                            className={`px-6 py-3 rounded-md transition font-medium text-md ${
                                currentRoute === '/'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            Home
                        </Link>

                        <Link
                            to="/calculator"
                            className={`px-6 py-3 rounded-md transition font-medium text-md ${
                                currentRoute === '/calculator'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            Calculator
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}