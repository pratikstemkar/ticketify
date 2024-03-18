import { AccountFormValues } from "@/app/(user)/_components/AccountForm";
import { getAccessToken } from "./auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const changePassword = async (values: AccountFormValues) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${getAccessToken()}`);

        const response = await fetch("http://localhost:8080/api/v1/users", {
            method: "PATCH",
            headers: myHeaders,
            body: JSON.stringify(values),
            redirect: "follow",
        });
        if (!response.ok) {
            throw new Error("Failed to change password.");
        }

        toast("Password changed successfully.");
    } catch (error: any) {
        console.log("Error: ", error.message);
        toast(error.message, {
            description: "Please check the passwords and try again.",
        });
    }
};

export const getProfile = async (access_token: string) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${access_token}`);
    const profileResponse = await fetch("http://localhost:8080/api/v1/users", {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    });
    if (!profileResponse.ok) {
        throw new Error("Failed to authenticate token");
    }

    const profileData = await profileResponse.json();
    console.log(profileData);

    return profileData;
};
