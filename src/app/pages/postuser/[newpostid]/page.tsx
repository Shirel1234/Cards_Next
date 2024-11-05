import Card from "@/app/components/Card";
import PostView from "@/app/types/post";
import { getUser } from "@/app/services/userActive";
import User from "@/app/types/user";

const Page = async (props: PostView) => {

    const { newpostid } = await props.params;
    const user: User |  undefined = await getUser(newpostid);
    console.log( "xyrxyrxyrxyrx" + user);
    if (!user) {
        return <div>User not found</div>;
      }
    return (
        <div className='flex flex-col '>
            <h1>hii</h1>
            <Card
                id={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                image={user.image}
            />
        </div>
    )
}
export default Page


