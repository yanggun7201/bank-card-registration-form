import React from 'react';
import { css, Global } from "@emotion/react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RegisterCardForm from "./pages/RegisterCardForm";
import Menu from "./components/menus/Menu";
import Menu1 from "./pages/Menu1";
import Menu2 from "./pages/Menu2";
import Loading from "./components/loading/Loading";

function App() {
    return (
        <RecoilRoot>
            <React.Suspense fallback={<Loading />}>
                <div css={containerStyle}>
                    <Global styles={style} />
                    <BrowserRouter>
                        <Menu />
                        <Switch>
                            <Route exact path="/register">
                                <RegisterCardForm />
                            </Route>
                            <Route exact path="/menu1">
                                <Menu1 />
                            </Route>
                            <Route exact path="/menu2">
                                <Menu2 />
                            </Route>
                            <Redirect to="/register" />
                        </Switch>
                    </BrowserRouter>
                </div>
            </React.Suspense>
        </RecoilRoot>
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