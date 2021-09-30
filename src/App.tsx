import React from 'react';
import { css, Global } from "@emotion/react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import RegisterCardForm from "./pages/RegisterCardForm";
import Menu from "./components/menus/Menu";

function App() {
    return (
        <div>
            <div css={containerStyle}>
                <Global styles={style} />
                <BrowserRouter>
                    <Menu />
                    <Switch>
                        <Route exact path="/register">
                            <RegisterCardForm />
                        </Route>
                        <Redirect to="/register" />
                    </Switch>
                </BrowserRouter>
            </div>
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

const containerStyle = css`
    position: relative;
`;