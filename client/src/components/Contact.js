import React, { Component } from 'react';
import FlexView from 'react-flexview';
import '../style/Contact.css';
import FullPage from "./FullPage";
import {Link} from "react-router-dom";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.typeEmail = this.typeEmail.bind(this);
        this.typeName = this.typeName.bind(this);
        this.typeMessage = this.typeMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    state = {
        sent: false,
        name: '',
        email: '',
        message: ''
    };

    componentDidMount() {
        this.props.changeLogoMode('dark');
    }

    async postData(url = '', data = {}) {
        // Default options are marked with *
        await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    }

    async sendMessage(e) {
        e.preventDefault();
        const url = '/api/sendmail';
        const { name, email, message } = this.state;
        const request = { name, email, message };
        console.log(request);
        await this.postData(url, request);
        this.setState({sent: true});
    }

    async typeEmail(e) {
        e.preventDefault();
        await this.setState({email: e.target.value.replace(/(\r\n|\n|\r)/gm, "")});
    }

    async typeName(e) {
        e.preventDefault();
        await this.setState({name: e.target.value.replace(/(\r\n|\n|\r)/gm, "")});
    }

    async typeMessage(e) {
        e.preventDefault();
        await this.setState({message: e.target.value})
    }

    render() {
        const form =
            <FlexView column className="form" vAlignContent="center" hAlignContent="center">
                <FlexView className="text" column hAlignContent="center">
                    <h1>Mail me anything!</h1>
                    <p>I promise to read your message as soon as I can.</p>
                </FlexView>
                <FlexView className="form-controls">
                    <form action="/send-email" method="post" >
                        <br style={{clear:'both'}} />
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name"
                                   onChange={this.typeName}
                                   value={this.state.name}
                                   placeholder="Your name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email"
                                   onChange={this.typeEmail}
                                   value={this.state.email}
                                   placeholder="you@awesome.com" required />
                        </div>


                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" type="textarea" id="message" name="message"
                                      onChange={this.typeMessage}
                                      placeholder="Type anything here..." maxLength="140" rows="7" required />
                        </div>
                        <div className="text-center">
                            <button id="submit"
                                    name="submit"
                                    onClick={this.sendMessage}
                                    className="btn-submit">
                                Send
                            </button>
                        </div>
                    </form>
                </FlexView>
            </FlexView>;

        const sent =
            <FlexView column className="sent" width="100%" height="100%" vAlignContent="center" hAlignContent="center">
                <h1>Thank you</h1>
                <p>I will read this carefully and get back to you with my thoughts very soon!</p>
                <Link to="/">
                    <button>Go back</button>
                </Link>

            </FlexView>;

        return (
            <FlexView grow column className="contact" width="100%">
                <FullPage>
                    <FlexView className="section" width="100%" column>
                        { !this.state.sent ? form : sent }
                    </FlexView>
                </FullPage>
            </FlexView>
        )
    }

}
