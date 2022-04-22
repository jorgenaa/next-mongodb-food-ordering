import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "@components/common";
import { reset } from "redux/store/cartSlice";

const SuccessPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(reset())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])
  
  return (
    <div>
        <h1>Din bestilling var vellykket!</h1>
        <h2>Sjekk din epost for bekreftelse av orderen</h2>
    </div>
  )
}
SuccessPage.Layout = Layout;
export default SuccessPage