import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export class Dashboard extends React.Component<any, any> {
	breadCrumbs: any;
	constructor(props: any) {
		super(props);
		this.state = {
			analyslsToggle: false,
      activeTab: 0,
      selectCustomDate: false,
      selectionRange: {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
		};
		this.breadCrumbs = [
			{
				label: 'Home',
				route: `/`
			},
			{
				label: 'Iframe | Home',
				isCurrentPage: true
			}
		];
	}

  setActiveTab = (activeTab: any) => {
    this.setState({
      activeTab,
    });
  };

  handleSelect = (ranges: any) => {
    this.setState({selectionRange: ranges.selection})
  }

	render() {
		const { analyslsToggle, activeTab, selectCustomDate, selectionRange } = this.state;
		return (
			<div className="statistics-dashboard-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ELEMENT MANAGER" />
				<div className="statistics-container">
					<div className="statistics-left">
						<div className="heading">Lambda</div>
					</div>
					<div className="statistics-right">
            <div className="buttons">
              <button className="btn lambda-btn">Lambda Overview</button>
              <button className="btn events-btn">Go To Events</button>
            </div>						
					</div>
				</div>
				<div className="statistics-tabs">
          <div className="tab-head">
            <div className="tabs-left">
              <ul>
                <li className={activeTab === 0 ? 'active' : ''} onClick={(e) => this.setActiveTab(0)}>All Product</li>
                <li className={activeTab === 1 ? 'active' : ''} onClick={(e) => this.setActiveTab(1)}>Product 1</li>
                <li className={activeTab === 2 ? 'active' : ''} onClick={(e) => this.setActiveTab(2)}>Product 2</li>
                <li className={activeTab === 3 ? 'active' : ''} onClick={(e) => this.setActiveTab(3)}>Product 3</li>
              </ul>
              <button className="btn sliders-btn">
                <i className="fa fa-sliders"></i>
              </button>
            </div>
            <div className="tabs-right">
              <div className="buttons">
                <button className="btn">Today</button>
                <button className="btn">1W</button>
                <button className="btn active">1M</button>
                <button className="btn">3M</button>
                <button 
                  className="btn"
                  onClick={() =>
                    this.setState({
                      selectCustomDate: !selectCustomDate
                  })}
                >
                  Custom <i className="fa fa-calendar"></i>
                </button>
                <div className={
                    selectCustomDate === true ? (
                      'select-custom-date active'
                    ) : (
                      'select-custom-date'
                    )
                  }
                >
                  <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={this.handleSelect}
                    months={2}
                    moveRangeOnFirstSelection={false}
                    direction="horizontal"
                  />
                </div>
              </div>
              <div className="analysls-toggle-main">
                <button 
                  className="btn analysls-btn"
                  onClick={() =>
                    this.setState({
                      analyslsToggle: !analyslsToggle
                  })}
                >
                  <i className="fa fa-cog"></i>
                  Analyser
                  <i className="fa fa-caret-down"></i>
                </button>
                <div
                  className={
                    analyslsToggle === true ? (
                      'toggle active'
                    ) : (
                      'toggle'
                    )
                  }
                >
                  <ul>
                    <li><i className="fa fa-dot-circle-o"></i> Request</li>
                    <li className="active"><i className="fa fa-dot-circle-o"></i> Usage</li>
                    <li><i className="fa fa-dot-circle-o"></i> Error</li>
                    <li><i className="fa fa-dot-circle-o"></i> Resources</li>
                    <li><i className="fa fa-dot-circle-o"></i> Performance</li>
                    <li><i className="fa fa-dot-circle-o"></i> Threat</li>
                  </ul>
                </div>
                <div
                  className={
                    analyslsToggle === true ? (
                      'statistics-toggle-bg active'
                    ) : (
                      'statistics-toggle-bg'
                    )
                  }
                  onClick={() =>
                    this.setState({ analyslsToggle: !analyslsToggle })}
                />
              </div>
            </div>		
          </div>
          <div className="tab-contents">
            {activeTab === 0 && (
              <div className={activeTab === 0 ? 'content active' : 'content'}>
                <iframe src="https://www.javatpoint.com/" width={'100%'} height={400}></iframe>  
              </div>
            )}
            {activeTab === 1 && (
              <div className={activeTab === 1 ? 'content active' : 'content'}>
                <iframe src="https://www.tutorialrepublic.com/" width={'100%'} height={400}></iframe>  
              </div>
            )}
            {activeTab === 2 && (
              <div className={activeTab === 2 ? 'content active' : 'content'}>
                <iframe src="http://www.example.com/" width={'100%'} height={400}></iframe>  
              </div>
            )}
            {activeTab === 3 && (
              <div className={activeTab === 3 ? 'content active' : 'content'}>
                <iframe src="https://player.vimeo.com/video/76979872" width={'100%'} height={400}></iframe>  
              </div>
            )}
            
          </div>
				</div>
			</div>
		);
	}
}
