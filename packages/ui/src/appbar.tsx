import { Button } from './button'


interface AppbarProps {
    user?: {
        name?: String | null;
    },
    onSignin?:any;
    onSignOut?:any;
}

const Appbar = ({
    user,
    onSignin,
    onSignOut
}:AppbarProps) => {
    return (<div className="flex justify-between border-b px-4">
    <div className="text-lg flex flex-col justify-center">
        Phe
    </div>
    <div className="flex flex-col justify-center pt-2">
        <Button onClick={user ? onSignOut : onSignin}>{user ? "Logout" : "Login"}</Button>
    </div>
</div>

  )
}

export default Appbar