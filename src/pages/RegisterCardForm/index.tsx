import React, { useCallback } from 'react';
import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { currentUserInfoQuery } from "../../store/store";
import Title from "../../components/layouts/Title";
import Container from "../../components/layouts/Container";
import Content from "../../components/layouts/Content";
import ContentTitle from "../../components/layouts/ContentTitle";
import RegisterForm, { FormValues } from "./components/RegisterForm";

const RegisterCardForm: React.FC = () => {
    const currentUser = useRecoilValue(currentUserInfoQuery);

    const registerCard = useCallback((values: FormValues) => {
        console.log('Submitted successfully!', values);
    }, []);

    return (
        <Container>
            <Title>Register card form</Title>
            <Content>
                <ContentTitle>Welcome {currentUser?.firstName}</ContentTitle>
                <RegisterForm css={registerFormStyle} registerCard={registerCard}/>
            </Content>
        </Container>
    );
}

export default RegisterCardForm;

const registerFormStyle = css`
    margin-top: 40px;
`;

