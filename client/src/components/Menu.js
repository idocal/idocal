import React, { Component } from 'react';
import '../style/Menu.css';
import { Link } from 'react-router-dom';

export default class Menu extends Component {

    toggleMenu = () => {
        if (document.getElementById('menu').classList.contains('open')) {
            document.getElementById('menu').classList.remove('open');
            document.getElementById('burger-button').classList.remove('open');
            document.getElementById('menu-overlay').classList.remove('open');
        } else {
            document.getElementById('menu').classList.add('open');
            document.getElementById('burger-button').classList.add('open');
            document.getElementById('menu-overlay').classList.add('open');
        }
    };

    render() {
        return (
            <div className="navigation">
                <div id="menu-overlay" />
                <div id="burger-button" onClick={this.toggleMenu}>
                    <div className="burger-bar" />
                    <div className="burger-bar" />
                    <div className="burger-bar" />
                </div>
                <div id="menu">
                    <nav>
                        <Link className="menu-item" to="/" onClick={this.toggleMenu}>Home</Link>
                        <Link className="menu-item" to="/about" onClick={this.toggleMenu}>About</Link>
                        <Link className="menu-item" to="/contact" onClick={this.toggleMenu}>Contact</Link>
                        <div className="secondary">
                            <a className="menu-item secondary-item" href="https://www.linkedin.com/in/idocal/" target="_blank" rel="noopener noreferrer">LiknedIn</a>
                            <a className="menu-item secondary-item" href="https://github.com/idocal" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}