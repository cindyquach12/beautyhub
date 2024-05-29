export default function ReviewDetails({ params }) {
    return (
        <div>
            <h1 className="text-2xl font-bold ml-[3.3125rem] mt-10">
                Review {params.reviewId}
            </h1>
        </div>
    );
}
