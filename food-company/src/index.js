import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/LazyLoading/Grocery';
import Shimmer from './components/Shimmer';

const Grocery = lazy(()=>import('./components/LazyLoading/Grocery'))

const AppLayout = ()=> {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout />,
        children:[
            {
                path:'/',
                element: <Body/>
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/contact',
                element: <Contact />
            },
            {
                path: '/restaurant-menu/:resId',
                element:<RestaurantMenu/>
            },
            {
                path: '/grocery',
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            }
        ],
        errorElement: <Error />
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(< RouterProvider router={appRouter}/>);
