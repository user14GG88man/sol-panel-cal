import {Outlet, createRootRoute} from '@tanstack/react-router';
import {Header} from '../components/Header';

export const Route = createRootRoute({
    component: () => {
        return (
            <>
                <Header/>
                <div>
                    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        Solar Panel Power Calculator for Ukrainian Regions
                    </h1>
                    <Outlet/>
                </div>
            </>
        );
    }
});