import { useEffect, useRef } from 'react'

const useAutoClose = () => {
    let domeNode: any = useRef<HTMLButtonElement | HTMLDivElement | null>(null); 
    const useClickOutside: any = ((handler: any) => {
        useEffect(() => {
            let maybeHandler = (e: any) => {
                if(!domeNode.current.contains(e.target)) {
                    handler();
                }
            }
            document.body.addEventListener('click', maybeHandler, true)
        
            return () => {
                document.body.removeEventListener('click', maybeHandler, true)
            }
        });
        return domeNode
    })
  return [useClickOutside]
}

export default useAutoClose