import { useAppSelector } from "storage/hooks/typedHooks";
import { selectUser } from "storage/slices/userSlice";

export const useAuth = () => {
  const { user, error } = useAppSelector(selectUser);

  return {
    user,
    error,
    isAuth: user !== null,
    isAdmin: user?.isAdmin,
  };
};
