import React from 'react';
import { useRecoilValue } from "recoil";
import { currentUserInfoQuery } from "../../store/store";
import Title from "../../components/layouts/Title";
import Container from "../../components/layouts/Container";
import Content from "../../components/layouts/Content";
import ContentTitle from "../../components/layouts/ContentTitle";

const RegisterCardForm: React.FC = () => {
    const currentUser = useRecoilValue(currentUserInfoQuery);

    return (
        <Container>
            <Title>Register card form</Title>
            <Content>
                <ContentTitle>Welcome {currentUser?.firstName}</ContentTitle>
            </Content>
        </Container>
    );
}

export default RegisterCardForm;
