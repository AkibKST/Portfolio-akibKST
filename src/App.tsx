import { Outlet } from "react-router";
import CommonLayout from "./components/layout/CommonLayout";
import ClickSpark from "./components/ClickSpark";
import HeroStickyNav from "./components/HeroStickyNav";

function App() {
  return (
    <>
      <HeroStickyNav />
      <CommonLayout>
        <div className="mx-auto">
          {/* for click spark effect */}
          <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <Outlet />
          </ClickSpark>
        </div>
      </CommonLayout>
    </>
  );
}

export default App;
