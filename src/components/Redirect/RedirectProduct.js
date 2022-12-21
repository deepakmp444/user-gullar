import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectProduct() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return <></>;
}

export default RedirectProduct;
