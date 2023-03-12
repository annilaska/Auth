import { useAppSelector } from "./reduxHooks";

export function useAuth() {
    const { email, token, id, name, image } = useAppSelector(state => state.userSection)

    return {
        isAuth: !!email,
        email,
        token,
        id,
        name,
        image,
    }
}