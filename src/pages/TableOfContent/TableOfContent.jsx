import Introduction from "./Introduction"
import Table from "./Table"
import Images from "./MovingImages"
import { useContext, useEffect } from "react"
import { StateContext } from "../../states"
import { handleDeviceSize } from "../../component/utils/js/handleDeviceSize"
import { observeCross, observeSection } from "../../component/utils/js/observer"
import SmoothWrapper from "../../component/SmoothWrapper"

export default function Layout(){
  const { setIsDesktop, setIsHoverImageVisible, setIsCrossVisible, setLocation } = useContext(StateContext)
  useEffect(() => {
    handleDeviceSize(setIsDesktop);
    observeSection();
    observeCross(setIsHoverImageVisible, setIsCrossVisible);
    setLocation("/")
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