import React from 'react';

const Footer = () => {
    return (
        <div>
            <h3>Props vs State</h3>
            <p>Props can read only. Props Cannot be Modified.State changes can be asynchonous. State can be modified using this.setState</p>

            <h3>How useState() works</h3>
            <p>useState is a function that allows to have state variables in functional components. it stores the initial state value and returns current state value as a variable and another function updates this value.</p>
        </div>
    );
};

export default Footer;