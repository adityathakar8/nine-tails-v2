import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <Link className="button-class" to="/form">
                        <button type="button" class="btn btn-info   bg-grey">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
