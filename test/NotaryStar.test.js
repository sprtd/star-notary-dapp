
const NotaryStar = artifacts.require('./NotaryStar.sol')

let  notaryStar, instance, accounts, owner, addr1



contract('NotaryStar', async accs => {
  accounts = accs;
  owner = accounts[0];
  addr1 = accounts[1]
  addr2 = accounts[2]

  beforeEach(async() => {
    notaryStar = await NotaryStar.deployed()

  })


  contract('Deployment', async() => {
    it('It has a name', async() => {
       instance = await NotaryStar.deployed()
        let starName = await instance.starName.call()
        assert.equal(starName, "Greatness") 
      })

  })


  contract('Transactions', async() => {

    it('It claims star', async() => {
      await notaryStar.claimStar({ from: addr1 })
      let starOwner = await notaryStar.starOwner.call()
      console.log('this is the txn', starOwner)
      assert.equal(starOwner, addr1)
    })
    
  
    it('It can change ownership', async() => {
      // let notaryStar = await NotaryStar.deployed()
      await notaryStar.claimStar({ from: addr1 })
  
      let starOwner1 = await notaryStar.starOwner.call()
      assert.equal(starOwner1, addr1)
      
      await notaryStar.claimStar({ from: owner })
      let starOwner2 = await notaryStar.starOwner.call()
  
      assert.equal(starOwner2, owner)
  
    })
    
  
    it('It changed name', async() => {
      // let notaryStar = await NotaryStar.deployed()
      let starName
      
      starName = await notaryStar.starName.call()
      console.log({"firstTimeCall": starName})
      
      const name1 = await notaryStar.starName.call()
      console.log({ "initialName" : name1 })
      const starOwner1 = await notaryStar.starOwner.call()
      console.log('owner 1', starOwner1)
      
      
      const newName = 'Keep Pushing'
      await notaryStar.changeName(newName, {from: addr1})
      const name2 = await notaryStar.starName.call()
      const starOwner2 = await notaryStar.starOwner.call()
      console.log('final name', name2)
      
      starName = await notaryStar.starName.call()
      
      console.log('initial name', name1)
      console.log('owner 2', starOwner2)
      
      
      console.log({"secondTimeCall": starName})
      assert.equal(await notaryStar.starName.call(), "Keep pushin") 
      // await assert.equal(starOwner1, starOwner2)
    })
    
  })

})

 
  