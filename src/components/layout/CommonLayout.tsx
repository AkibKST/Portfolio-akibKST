import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ClickSpark from "../ClickSpark";
import LiquidEther from "../LiquidEther";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* for click spark effect */}
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div>
          <div className="fixed inset-0 z-[-1] opacity-30 dark:opacity-20 pointer-events-none">
            <LiquidEther />
          </div>
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </div>
      </ClickSpark>
    </div>
  );
}
