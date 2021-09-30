import { atom, selector, selectorFamily } from "recoil";

export type User = {
    id: string,
    firstName: string,
    lastName: string,
}

export type Response = {
    error?: string,
    user?: User,
}

const TEST_USER = {
    id: "12345",
    firstName: "Lucas",
    lastName: "Lee"
}

const myDBQuery = async (userID: string): Promise<Response> => {
    return new Promise(resolve => {
        setTimeout(() => {
            const response = {
                user: {
                    ...TEST_USER,
                    id: userID,
                }
            };
            resolve(response);
        }, 1000);
    });
}

export const currentUserIDState = atom({
    key: 'CurrentUserID',
    default: TEST_USER.id,
});

export const userInfoQuery = selectorFamily({
    key: 'UserInfoQuery',
    get: (userID: string) => async () => {
        const response = await myDBQuery(userID);

        if (response.error) {
            throw response.error;
        }
        return response.user;
    },
});

export const currentUserInfoQuery = selector({
    key: 'CurrentUserInfoQuery',
    get: ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});