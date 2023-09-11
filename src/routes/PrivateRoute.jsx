import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { useGenerateJWTMutation } from "../redux/features/api/baseApi";
import { setUser } from "../redux/features/users/userSlices";
import { auth } from "../utils/firebase.config";

const PrivateRoute = ({ children }) => {
  const { isLoading, email } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const location = useLocation();

  const [generateJWT, { data: token }] = useGenerateJWTMutation();

  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            avatar: user.photoURL,
            email: user.email,
          })
        );
        generateJWT(user.email);
      } else {
        dispatch(
          setUser({
            name: "",
            avatar: "",
            email: "",
          })
        );
      }
    });

    () => onSubscribe();
  }, [dispatch, generateJWT]);

  useEffect(() => {
    if (token && token?.token) {
      localStorage.setItem("plan-perfect-token", token.token);
    }
  }, [token]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!isLoading && email) {
    return children;
  } else {
    return <Navigate to="/login" replace={true} state={{ from: location }} />;
  }
};

export default PrivateRoute;
