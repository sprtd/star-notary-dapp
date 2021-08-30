import { useContext, useState } from "react"
import { AccountContext } from "../../contexts/account-context"
import { FunctionContext } from "../../contexts/function-context"
import { ContentWrapper, DappContentWrapper } from "./content.styles"
const Content = () => {
  
  const [ showStar, setShowStar] = useState(undefined)
  const [ showOwner, setShowOwner] = useState(undefined)
  const { contract } = useContext(FunctionContext)
  const { account } = useContext(AccountContext) 
  console.log('this is the account', account)
  const [newStar, setNewStar] = useState('')
  // console.log({ thisIsTheNewStar: newStar })

  const getNotaryStar = async() => {
    try {
      const star = await contract.methods.starName().call()
      console.log({ latestStar: star })
      setShowStar(star)    
    } catch(err) {
      console.log(err)
    }
  }

  const getStarOwner = async() => {
    try {
      const starOwner = await contract.methods.starOwner().call()
      setShowOwner(starOwner)

    } catch(err) {
      console.log(err)
    }

  }

  const claimStar = async() => {
    try {
      await contract.methods.claimStar().send('eth_sendTransaction', { from: account })
      // getStarOwner()
    } catch(err) {
      console.log(err)
    }
  }


  const changeStarName = async newStar => {
    try {
      await contract.methods.changeName(newStar).send({ from: account }).then(console.log)
      setNewStar('')
    } catch(err) {
      console.log(err)
    }
  }


 

  return (
    <ContentWrapper>
      <DappContentWrapper>
        <h4>Star Name</h4>
        {showStar  ?  <p>{showStar}</p> : <p></p>}
        <button onClick={() => {
          console.log('get clicked')
          getNotaryStar()
        }}>Get Star Name</button>
        <span></span>
        
        
        <h4>Star Owner</h4>
        {showOwner ? <p> {showOwner}</p> : <p></p>}
        <button onClick={ getStarOwner }>Get Star Owner</button>
        <span></span>
       
        <h4>Star Details</h4>
        <button onClick={ claimStar }>Claim Star </button>
        <span></span>
       

        { console.log(newStar)}
        <input type="text" placeholder='Enter star name...' onChange={e => setNewStar(e.target.value)} value={ newStar } />
        <button onClick={ changeStarName }>Change Star Name </button>
        <span></span>

        
      </DappContentWrapper>
      
    </ContentWrapper>
  )
}

export default Content
