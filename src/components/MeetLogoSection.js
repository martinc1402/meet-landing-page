import { render } from "@testing-library/react";

function MeetLogoSection() {
    return (
        <div className="intro">
            <header className="intro__header">
                <div className="intro__header--logo-box">
                    <img src="../assets/logo.svg" alt="Meet Logo" />
                </div>
            </header>
        </div>
    );
}

export default MeetLogoSection;