import SubmitButton from "@/components/SubmitButton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SignInForm = () => {
    return (
        <form>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" placeholder="Enter your password" />
            </div>
            <SubmitButton>Sign In</SubmitButton>
        </form>
    )
}

export default SignInForm