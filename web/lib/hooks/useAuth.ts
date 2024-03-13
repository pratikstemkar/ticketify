import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/authSlice";
import { useMemo } from "react";

export const useAuth = () => {
    const user = useSelector(selectCurrentUser);

    return useMemo(() => ({ user }), [user]);
};
