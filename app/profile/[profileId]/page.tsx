import { FunctionComponent } from "react";

type UserProfileProps = {
    params: {
        profileId: string;
    };
};

export const UserProfile: FunctionComponent<UserProfileProps> = ({
    params,
}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold ml-[3.3125rem] mt-10">
                User profile {params.profileId}
            </h1>
        </div>
    );
};

export default UserProfile;
