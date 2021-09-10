import { createContext, useState } from "react";
import { comments } from "./state/state";


export const CommentContext = createContext()


export default function Context({ children }) {
    const [comment, setComment] = useState(comments)
    return (
        <CommentContext.Provider value={{ comment, setComment }}>
            {children}
        </CommentContext.Provider>
    )
}
