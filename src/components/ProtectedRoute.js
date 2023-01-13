import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../store/features/userSlice";
function ProtectedRoute({ children }) {
  const { userProfile } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      Object.keys(userProfile).length === 0 &&
      userProfile.constructor === Object
    ) {
      dispatch(getUserProfile());
    }
  }, []);

  return children;
}

export default ProtectedRoute;
