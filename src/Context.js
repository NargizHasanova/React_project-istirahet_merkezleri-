import { createContext, useState } from "react";
import { aquaComments, aquaPark, beach, beachComments, sanatorium, sanComments } from "./state/state";



export const BeachContext = createContext()
export const AquaContext = createContext()
export const SanatoriumContext = createContext()
export const BeachCommentContext = createContext()
export const AquaCommentContext = createContext()
export const SanCommentContext = createContext()


export default function Context({ children }) {

    const [beachData, setBeachData] = useState(beach)
    const [aquaData, setAquaData] = useState(aquaPark)
    const [sanatoriumData, setSanatoriumData] = useState(sanatorium)
    const [beachComment, setBeachComment] = useState(beachComments)
    const [aquaComment, setAquaComment] = useState(aquaComments)
    const [sanComment, setSanComment] = useState(sanComments)
    return (
        <BeachContext.Provider value={{ beachData, setBeachData }}>
            <AquaContext.Provider value={{ aquaData, setAquaData }}>
                <SanatoriumContext.Provider value={{ sanatoriumData, setSanatoriumData }}>
                    <BeachCommentContext.Provider value={{ beachComment, setBeachComment }}>
                        <AquaCommentContext.Provider value={{ aquaComment, setAquaComment }}>
                            <SanCommentContext.Provider value={{ sanComment, setSanComment }}>
                                {children}
                            </SanCommentContext.Provider>
                        </AquaCommentContext.Provider>
                    </BeachCommentContext.Provider>
                </SanatoriumContext.Provider>
            </AquaContext.Provider>
        </BeachContext.Provider>
    )
}
