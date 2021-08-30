import { createContext, useState } from 'react'

export const AccountContext = createContext()


const AccountContextProvider = ({ children }) => {
  const [account, setAccount] = useState('')
  const [isConnected, setIsConnected] = useState(false)


  const setAccountDetails = payload => setAccount(payload)

  const setConnection = () => {
    setIsConnected(true)
  }

  return (
    <AccountContext.Provider value={{ setAccountDetails, account, setConnection, isConnected }}>
      { children }
    </AccountContext.Provider>
  )

}

export default AccountContextProvider