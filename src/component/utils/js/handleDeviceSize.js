export const handleDeviceSize = (setIsDesktop) => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth > 1024);
  };

  window.addEventListener('resize', handleResize);
  handleResize();

  return () => {
    window.removeEventListener('resize', handleResize);
  };
};
