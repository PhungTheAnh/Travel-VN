import findPosition from "@/app/component/function/findPosition";


const scrollEffect = (ref: any, iClass: string) => {
  // @ts-ignore
  if (window.scrollY + window.innerHeight> findPosition(ref.current)[0]+ 100) {
    ref.current?.classList.add(iClass)
  } else {
    ref.current?.classList.remove(iClass)
  }
}

export default  scrollEffect