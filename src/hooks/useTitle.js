import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Milestone Travels`;
    }, [title]);
};

export default useTitle;