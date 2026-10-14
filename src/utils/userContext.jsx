import { createContext, useMemo, useState } from "react";

export const UserStateContext = createContext(null);
export const UserActionsContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const actions = useMemo(
        () => ({
            logIn: (userData) => setUser(userData),
            logOut: () => setUser(null),
        }),
        [] // setUser is stable, so this object never changes
    );

    return (
        <UserActionsContext.Provider value={actions}>
            <UserStateContext.Provider value={user}>
                {children}
            </UserStateContext.Provider>
        </UserActionsContext.Provider>
    );
};