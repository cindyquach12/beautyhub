export default function UserProfile({ params }) {
    return (
        <div>
            <h1 className="text-2xl font-bold ml-[3.3125rem] mt-10">
                User profile {params.profileId}
            </h1>
        </div>
    );
}
