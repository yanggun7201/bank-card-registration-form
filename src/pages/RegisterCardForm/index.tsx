import React from 'react';
import { useRecoilValue } from "recoil";
import { currentUserInfoQuery } from "../../store/store";

const RegisterCardForm: React.FC = () => {
    const currentUser = useRecoilValue(currentUserInfoQuery);

    return (
        <div>
            <div>Welcome {currentUser?.firstName}</div>
        </div>
    );
}

export default RegisterCardForm;
