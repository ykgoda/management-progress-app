import { GetServerSideProps } from "next";
import { getCsrfToken } from "next-auth/react";
import { useRouter } from "next/router";

type SignInProps = {
    csrfToken?: string;
}

export default function Signin({csrfToken}: SignInProps) {
    const router = useRouter();
    const { error } = router.query;
    
    return(
        <form action="/api/auth/callback/credentials" method="post">
            <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
            <label>
                ログインID
                <input type="text" name="loginId" />
            </label>
            <label>
                パスワード
                <input type="password" name="password" />
            </label>
            <button type="button">サインイン</button>
        </form>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        }
    }
}