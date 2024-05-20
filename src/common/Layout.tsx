// import React from 'react'
// import Navbar from '../components/Navbar';
// import DrawerDashboard from '../components/Drawer';
// import { Box, Grid } from '@mui/material';
// import Section from '../components/Section';
import Navbar from '../components/navigation/Navbar';
import Drawer from '../components/Sidebar/Drawer';

type LayoutProps = {
    children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <main>            
            <Navbar />
            <section className='flex'>
                <Drawer />
                <section className='w-full'>
                    {children}
                </section>
            </section>
        </main>
    );
}

export default Layout;