import React from 'react';
import { useRecoilValue } from "recoil";
import { currentUserInfoQuery } from "../../store/store";
import Title from "../../components/layouts/Title";
import Container from "../../components/layouts/Container";
import Content from "../../components/layouts/Content";

const RegisterCardForm: React.FC = () => {
    const currentUser = useRecoilValue(currentUserInfoQuery);

    return (
        <Container>
            <Title>Register card form</Title>
            <Content>
                <div>Welcome {currentUser?.firstName}</div>
            </Content>
        </Container>
    );
}

export default RegisterCardForm;
