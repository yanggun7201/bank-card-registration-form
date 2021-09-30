import React from 'react';
import Container from "../../components/layouts/Container";
import Title from "../../components/layouts/Title";
import Content from "../../components/layouts/Content";
import ContentTitle from "../../components/layouts/ContentTitle";

const Menu1: React.FC = () => (
    <Container>
        <Title>Sample Menu 1</Title>
        <Content>
            <ContentTitle>Sample Menu 1</ContentTitle>
        </Content>
    </Container>
);

export default Menu1;