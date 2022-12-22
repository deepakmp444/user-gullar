import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { url } from "../utils/Constant";
import { getUserProfile } from "../store/features/userSlice";
function ProtectedRoute({ children }) {
  const { userProfile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
