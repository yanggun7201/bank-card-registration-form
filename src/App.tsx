import React from 'react';
import { css, Global } from "@emotion/react";

function App() {
  return (
      <div className="App">
        <Global styles={style} />
        Bank card form
      </div>
  );
}

export default App;

const style = css`
    body {
        padding: 0;
        margin: 0;
        color: #212121;
    }

    a {
        text-decoration: none;
    }

    *,
    :after,
    :before {
        box-sizing: border-box;
    }
`;