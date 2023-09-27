import React from 'react';

const LongText = ({ content,limit}) => {  
    if (content.length <= limit) {
      return <p>{content}</p>
    }

    const toShow = content.substring(0, limit) + " ...";

    return <p>{toShow}</p>

}

export default LongText;