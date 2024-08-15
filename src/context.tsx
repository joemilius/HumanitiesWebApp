import React, { createContext, PropsWithChildren, useState } from 'react'

export interface IUser {
    id: number,
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    logins: number,
    password: string
}

const useValue = () => {
    const[currentUser, setCurrentUser] = useState<IUser>()

    return{
        currentUser,
        setCurrentUser
    }
}

export const StateContext = createContext({} as ReturnType<typeof useValue>)

export const StateContextProvider: React.FC<PropsWithChildren> = (props) => {
    return(
                    <StateContext.Provider value={useValue()}>
                        {props.children}
                    </StateContext.Provider>
            )
}

// export function StateProvider ({ children }) {
//     const[user, setUser] = useState(null)

//     return(
//         <div>
//             <StateContext.Provider value={{user , setUser}}>
//                 {children}
//             </StateContext.Provider>
//         </div>
//     )
// }