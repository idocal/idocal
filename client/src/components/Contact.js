import React, { Component } from 'react';
import FlexView from 'react-flexview';
import '../style/Contact.css';
import FullPage from "./FullPage";
import {Link} from "react-router-dom";

export default class Contact extends Component {
    state = {
        sent: false
    };

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
                                   placeholder="Your name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email"
                                   placeholder="you@awesome.com" required />
                        </div>


                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" type="textarea" id="message" name="message"
                                      placeholder="Type anything here..." maxLength="140" rows="7" required />
                        </div>
                        <div className="text-center">
                            <button type="submit" id="submit" name="submit"
                                    className="btn btn-primary pull-right btn-submit">Send
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
