const scrollEffect = (ref: any, iClass: string) => {
  if (ref && iClass) {
    if (window.innerHeight > ref.current?.getBoundingClientRect().y) {
      ref.current?.classList.add(iClass)
    } else {
      ref.current?.classList.remove(iClass)
    }
  }
}

export default scrollEffect