import React, { Component } from 'react'

export default class Tabs extends Component {
        constructor(props) {
            super();
            this.state = {
                active: 0
            }
            }
            
            select = (i) => {
            let _this = this;
            return function() {
                _this.setState({
                active: i
                });
            }
            }
            
            renderTabs = () => {
            return React.Children.map(this.props.children, (item, i) => {
                if (i%2 === 0) {
                let active = this.state.active === i ? 'active' : '';
                return <li>
                    <a onClick={this.select(i)} className={`${active} tabs-link`}>{item}</a>
                </li> ;
                }
            });
            }
            
            renderContent() {
            return React.Children.map(this.props.children, (item, i) => {
                if (i-1 === this.state.active) {
                return <div className='content'>{item}</div>;
                } else {
                return;
                }
            });
            }
            
            render() {
            return (
            <>
            <ul className='filter-tabs'>
            {this.renderTabs()}
            </ul>
            {this.renderContent()}
            </>
            );
            }

    }
