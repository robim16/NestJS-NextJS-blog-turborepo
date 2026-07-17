import { SignJWT } from "jose"
import { cookies } from "next/headers"

export type SessionUser = {
    id?: string
    name?: string
    avatar?: string
}


export type Session = {
    user?: SessionUser
    accessToken: string
}

const secretKey = process.env.SESSION_SECRET_KEY!;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(payload: Session) {
    const session = await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).
        setIssuedAt().
        setExpirationTime("7d").
        sign(encodedKey)

    const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    (await cookies()).set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expiredAt,
        path: "/"
    })
}