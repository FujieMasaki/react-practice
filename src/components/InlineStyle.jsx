import { findByLabelText } from "@testing-library/react";

export const InlineStyle = () => {
    const containerStyle = {
        border:"solid 2px #392eff",
        boderRadius: "10px",
        padding: "8px",
        margin: "8px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    };
    const titleStyle = {
        margin: 0,
        color: "#3d84a9"
    };
    const buttonStyle = {
        backgroundColor: "#abedd8",
        border:"none",
        padding:"8px",
        borderRadius:"8px",
    };
    return(
        <div style={containerStyle}>
            <p style={titleStyle}>-inlineStyle-</p>
            <button style={buttonStyle}>FIGHT!</button>
        </div>
    )
}