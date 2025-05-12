import React from 'react'
import { Header, Footer } from '@/components/global.components';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col bg-bg-light">
            <Header />
            <div className="flex flex-col justify-center items-center">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
