import React from "react";
import { Wrapp, Title } from "../utils/styledComponents";
import { useAuthCheck } from "../hooks/useAuthCheck";

const UserPanel = () => {
    const { user } = useAuthCheck();

    return (
        <Wrapp>
            <Title>Witaj {user?.name} </Title>
        </Wrapp>
    );
};

export default UserPanel;
