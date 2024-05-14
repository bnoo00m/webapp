import { useEffect, useState } from "react";

export const useScrollTop = (threshold = 10) => {
    const [scrolled,setScrolled] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll);
    },[]);
}