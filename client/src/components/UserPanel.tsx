import React, { useState, useEffect } from "react";
import axios from "axios";
import { REDIRECT_LOGIN } from "../constants/redirect";
import { Wrapp, Title } from "../utils/styledComponents";
import noAuthWrapper from "../auth/noAuthWrapper";
import { Account } from "../../../shared/types/commonTypes";

interface Props {
    accessToken: string;
}
const UserPanel: React.FC<Props> = ({ accessToken }) => {
    const [account, setAccount] = useState<Account | null>(null);
    useEffect(() => {
        axios({
            method: "get",
            withCredentials: true,
            headers: {
                Authorization: accessToken,
            },
            url: "http://localhost:3001/login/current",
        })
            .then((res) => setAccount(res.data as Account))
            .catch((err) => console.log(err));
        return () => setAccount(null);
    }, [accessToken]);

    return (
        <Wrapp>
            <Title>Witaj {account?.user?.name} </Title>
        </Wrapp>
    );
};
//todo update auth wrapper

export default noAuthWrapper([REDIRECT_LOGIN])(UserPanel);
