import { useLottie } from "lottie-react";
import PageNotFound from "../../assests/Json/4339-not-found.json";

function Error() {
  const options = {
    animationData: PageNotFound,
    loop: true,
  };

  const { View } = useLottie(options);
  return <>{View}</>;
}

export default Error;
