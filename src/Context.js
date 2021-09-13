import { createContext, useState } from "react";
import { aquaPark, beach, comments, sanatorium } from "./state/state";



export const BeachContext = createContext()
export const AquaContext = createContext()
export const SanatoriumContext = createContext()
export const CommentContext = createContext()


export default function Context({ children }) {

    const [beachData, setBeachData] = useState(beach)
    const [aquaData, setAquaData] = useState(aquaPark)
    const [sanatoriumData, setSanatoriumData] = useState(sanatorium)
    const [comment, setComment] = useState(comments)
    return (
        <BeachContext.Provider value={{ beachData, setBeachData }}>
            <AquaContext.Provider value={{ aquaData, setAquaData }}>
                <SanatoriumContext.Provider value={{ sanatoriumData, setSanatoriumData }}>
                    <CommentContext.Provider value={{ comment, setComment }}>
                        {children}
                    </CommentContext.Provider>
                </SanatoriumContext.Provider>
            </AquaContext.Provider>
        </BeachContext.Provider>
    )
}
