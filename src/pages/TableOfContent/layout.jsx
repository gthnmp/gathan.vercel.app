import Introduction from "./Introduction"
import Table from "./Table"
import Images from "./MovingImages"
import { useContext, useEffect } from "react"
import { StateContext } from "../../states"
import { useLocation } from "react-router-dom"
import { handleDeviceSize } from "../../component/utils/js/handleDeviceSize"
import { observeCross, observeSection } from "../../component/utils/js/observer"
import SmoothWrapper from "../../component/SmoothWrapper"

export default function Layout(){
  const { setLocation, setIsDesktop, setIsHoverImageVisible, setIsCrossVisible } = useContext(StateContext)
  const location = useLocation();
  setLocation(location.pathname)
  
  useEffect(() => {
    handleDeviceSize(setIsDesktop);
    observeSection();
    observeCross(setIsHoverImageVisible, setIsCrossVisible);
  }, []);

  return(
    <>
    <SmoothWrapper>
      <Images/>
      <Introduction/>
      <Table/>
    </SmoothWrapper>
    </>
  )
}