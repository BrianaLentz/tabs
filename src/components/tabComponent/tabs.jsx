import React, {useState} from "react";
import FirstTab from "../allTabs/firstTab";
import SecondTab from "../allTabs/secondTab";
import ThirdTab from "../allTabs/thirdTab";
import TabContent from "../v2/tabContent";
const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1")

    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
};
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
};
    const handleTab3 = () => {
        // update the state to tab3
        setActiveTab("tab3");
};
    

    return (
    <div className="Tabs">
{/* Tab nav */}
    <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Tab 1</li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Tab 2</li>
        <li className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}>Tab 3</li>
    </ul>
    <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
            <p>Tab 1 works!</p>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
            <p>Tab 2 works!</p>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
            <p>Tab 3 works!</p>
        </TabContent>
    </div>
    </div>
    );
};
export default Tabs;