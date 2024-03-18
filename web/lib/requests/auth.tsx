import { toast } from "sonner";

export const getAccessToken = () => {
    try {
        const token = localStorage.getItem("access_token");
        if (token) {
            return token;
        } else {
            throw new Error("Access Token not found.");
        }
    } catch (error: any) {
        console.log("Error", error.message);
        toast("Access Token not found.", {
            description: error.message,
        });
    }
};

export const getRefreshToken = () => {
    try {
        const token = localStorage.getItem("refresh_token");
        if (token) {
            return token;
        } else {
            throw new Error("Refresh Token not found.");
        }
    } catch (error: any) {
        console.log("Error", error.message);
        toast("Refresh Token not found.", {
            description: error.message,
        });
    }
};
