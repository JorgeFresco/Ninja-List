import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
    children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="content">
            <Navbar />
            
            {children}
            <Footer />
        </div>
    );
}