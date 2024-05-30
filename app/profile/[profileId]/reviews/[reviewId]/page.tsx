import { FunctionComponent } from "react";

type ReviewDetailsProps = {
    params: {
        profileId: string;
        reviewId: string;
    };
};

export const ReviewDetails: FunctionComponent<ReviewDetailsProps> = ({
    params,
}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold ml-[3.3125rem] mt-10">
                Review {params.reviewId}
            </h1>
        </div>
    );
};

export default ReviewDetails;
