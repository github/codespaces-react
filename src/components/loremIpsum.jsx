import React from 'react';
import loremIpsum from 'lorem-ipsum';

const textCreator = () => {
    const loremText = loremIpsum ({
        count: 3,             // Number of paragraphs
        units: 'paragraphs',  // Generating paragraphs
        format: 'html',       // Output format (you can use 'plain' for plain text)
});

return (
    <div>
        <h1>React component</h1>
        <p>{loremText}</p>
    </div>
    );
};

export default textCreator;