import Card from '@/app/components/Card';
import { getUsers } from '../../services/userActive';
import User from '@/app/types/user';

const page = async () => {

    const users: User[] = await getUsers()

    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {users.map((user) => (
                <div key={user.id}>
                    <Card 
                    id={user.id} 
                    firstName={user.firstName} 
                    lastName={user.lastName} 
                    email={user.email} 
                    image={user.image} 
                    />
                </div>
            ))}
        </div>
    )
}

export default page
