import { useContext, useEffect } from "react"
import { AccountContext } from "../../contexts/account-context"
import NotaryStar from '../../contracts/NotaryStar.json'
import Content from "../content/content.component"

import { MainLayoutWrapper } from "./main-layout.style"
import getWeb3 from "../../utils/getWeb3"
import { FunctionContext } from "../../contexts/function-context"

const MainLayout = () => {
  const { setAccountDetails } = useContext(AccountContext)
  const { setContractInstance } = useContext(FunctionContext)

  useEffect(() => {
    const connectAccount = async () => {

      try {
        const web3 = await getWeb3()
        const accounts = await web3.eth.getAccounts()
        setAccountDetails(accounts[0])
        const networkId = await web3.eth.net.getId()
        const deployedNetwork  = NotaryStar.networks[networkId]

        const notaryStarInstance = await new web3.eth.Contract(NotaryStar.abi, deployedNetwork && deployedNetwork.address)
        console.log({ contract: notaryStarInstance})
      
        setContractInstance(notaryStarInstance)

      } catch(err) {
        alert(`Failed to load wev3, accounts or contracts`)
        console.log(err)
      }
      
    }
    
    connectAccount()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainLayoutWrapper>
      <h2>NotaryStar Dapp</h2>

      <Content />
    </MainLayoutWrapper>

  )
}


export default MainLayout