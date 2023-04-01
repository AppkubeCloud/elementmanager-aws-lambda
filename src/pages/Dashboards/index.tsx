import * as React from 'react';
import Select from "react-select";

const TABS: any = [
    {
        title: "All Products",
        dashboard: "ALL_PRODUCTS"
    },
    {
        title: "Product1",
        dashboard: "PRODUCT1"
    },
    {
        title: "Product2",
        dashboard: "PRODUCT2"
    },
    {
        title: "Product3",
        dashboard: "PRODUCT3"
    },
];

// const URL = "http://localhost:3002/load-dashboard?var-instanceId=i-0bf1e2a069ca7cb0e&var-instanceType=t3.xlarge&from=1678065547390&to=1678075813287&orgId=1";

const URL = "http://localhost:3002/load-dashboard";

export class Dashboards extends React.Component<any, any> {
    breadCrumbs: any;
    config: any;
    selectData: any;
    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: 0,
            dropdownOpen: false,
        };
        this.dropdonToggle = this.dropdonToggle.bind(this);
        this.selectData = [
            {
                value: 1,
                label: "Request",
                icon: <i className="fa-solid fa-gear setting-icon"></i>,
            },
            {
                value: 2,
                label: "Usage",
                icon: <i className="fa-solid fa-gear setting-icon"></i>,
            },
            {
                value: 3,
                label: "Error",
                icon: <i className="fa-solid fa-gear setting-icon"></i>,
            },
        ];
    }

    toggle(tab: any) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

    renderTabs(tabs: any) {
        const retData = tabs.map((tab: any, index: any) => {
            return (
                <li
                    key={index}
                    className={this.state.activeTab === index ? "active" : ""}
                    onClick={() => {
                        this.toggle(index);
                    }}
                >
                    {tab.title}
                </li>
            );
        });
        return retData;
    }

    renderTabContent(tabs: any) {
        return tabs.map((tab: any, index: any) => {
            return (<div style={{ display: this.state.activeTab === index ? "block" : "none" }}>
                <iframe style={{ width: "100%", height: "100%" }} src={`${URL}?${location.search.replace("?", "")}&dashboard=${tab.dashboard}`} />
            </div>);
        });
    }

    dropdonToggle() {
        this.setState((prevState: any) => ({
            dropdownOpen: !prevState.dropdownOpen,
        }));
    }

    render() {
        return (
            <div className="lambda-screen">
                <div className="topheader-part">
                    <div className="left-part">
                        <div className="title-name">
                            <span>Lambda</span>
                        </div>
                    </div>
                    <div className="right-part">
                        <button className="lambda-btn ">Lambda Overview</button>
                        <button className="event-btn">Go To Events</button>
                    </div>
                </div>
                <div className="tabs-part" style={{ height: "100%" }}>

                    <div className="left-part">
                        <ul>
                            {this.renderTabs(TABS)}
                        </ul>
                    </div>
                    <div className="right-part">
                        <div className="tab-right-section">
                            <div className="right-side-part  ">
                                <ul>
                                    <li>Today</li>
                                    <li>1W</li>
                                    <li className="active">1M</li>
                                    <li>3M</li>
                                    <li>Custom</li>
                                </ul>
                            </div>
                            <div className="dropdown-part">
                                <Select
                                    className="dropdown-info"
                                    placeholder="Select"
                                    // value={selectedOption}
                                    options={this.selectData}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "100%" }}>
                        {this.renderTabContent(TABS)}
                    </div>
                </div>
            </div>
        );
    }
}
