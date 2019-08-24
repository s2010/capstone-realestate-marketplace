var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];    // owner
    const account_two = accounts[1];    // another account
    const account_three = accounts[2];  // another account
    const baseTokenURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/';



    describe('🏡 ✅ match erc721 spec', function () {
          beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new({ from: account_one });
            for (let i = 0; i < 5; i++)
            {
                await this.contract.mint(account_one, i, baseTokenURI);
            }

            for (let i = 5; i < 10; i++)
            {
                await this.contract.mint(account_two, i, baseTokenURI);
            }

        })

        it('🏡 should return total supply', async function () { 

          result = await this.contract.totalSupply();
          assert.equal(10, result, '❌ Total supply should be 4');
            
        })

        it('🏡 should get token balance', async function () { 
            
          let result1 = await this.contract.balanceOf(account_one);
          let result2 = await this.contract.balanceOf(account_two);

          assert.equal(5, result1, "❌ wrong balance, Account 1 should have balance of 5");
          assert.equal(5, result2, "❌ wrong balance, Account 2 should have balance of 5");

        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('🏡 should return token uri', async function () { 
          
          let result = await this.contract.tokenURI(1);
          let expectedResult = baseTokenURI + 1;
          assert.equal(result, expectedResult, "❌ incorrect Token URI");

        })

        it('🏡 should transfer token from one owner to another', async function () { 
            console.log("Owner Before: " + account_one);
            await this.contract.transferFrom(account_one, account_two, 1,
                { from: account_one }); //transfer token with id 1

            let newOwner = await this.contract.ownerOf(1);

            console.log("Owner After: " + newOwner);
            assert.equal(newOwner, account_two, "❌ failed to transfer Token");
        })

        it('🏡 should update balance of owned tokens after transfer', async function () {
          // balance of account 1 should decrease by one
          // balance of account 2 should increas by one
          let balanceBefore1 = await this.contract.balanceOf(account_one);
          let balanceBefore2 = await this.contract.balanceOf(account_two);
          console.log(`➡️ Before:\nBalance1: ${balanceBefore1}\nBalance2: ${balanceBefore2}`);
          await this.contract.transferFrom(account_one, account_two, 2,
              { from: account_one }); //transfer token with id 2

          let balanceAfter1 = await this.contract.balanceOf(account_one);
          let balanceAfter2 = await this.contract.balanceOf(account_two);

          console.log(`\n ➡️ After:\nBalance1: ${balanceAfter1}\nBalance2: ${balanceAfter2}`);

          assert.equal(parseInt(balanceAfter1), (parseInt(balanceBefore1) - 1), "❌ Account 1 balance failed to update!");
          assert.equal(parseInt(balanceAfter2), (parseInt(balanceBefore2) + 1), "❌ Account 2 balance failed to update!");

      })

      it('🏡 should prevent token ID duplicates', async function () {

          let errorFound = false;
          try {
              await this.contract.mint(account_one, 1, baseTokenURI);
          }
          catch (e) {
              console.log(e.reason);
              errorFound = true;
          }

          assert.equal(errorFound, true, "❌ Token ID Cannot be duplicated ");
      })

      it('🏡 should clear approvals after token transfer', async function () {

          await this.contract.approve(account_three, 3, { from: account_one });
          let beforeTransfer = await this.contract.getApproved(3);
          console.log("✅ Approved Account Before: " + beforeTransfer);
          await this.contract.transferFrom(account_one, account_two, 3, { from: account_one });
          let afterTransfer = await this.contract.getApproved(3);
          console.log("✅ Approved Account After: " + afterTransfer);

          assert.equal(beforeTransfer == afterTransfer, false, "❌ Approvals do not get cleared!");
      })

      it('🏡 should allow approved accounts to transfer', async function () {
          let ownerBefore;
          let ownerAfter;
          let errorFound = false;
          try {
              await this.contract.approve(account_three, 3, { from: account_one });
              let beforeTransfer = await this.contract.getApproved(3);
              console.log("✅ Approved Account Before: " + beforeTransfer);
              ownerBefore = await this.contract.ownerOf(3);
              console.log("Owner of Token 3 Before: " + ownerBefore);
              await this.contract.transferFrom(account_one, account_two, 3, { from: account_three });
              let afterTransfer = await this.contract.getApproved(3);
              console.log("✅ Approved Account After: " + afterTransfer);
              ownerAfter = await this.contract.ownerOf(3);
              console.log("Owner of Token 3 After: " + ownerAfter);
          }
          catch (e) {
              console.log(e.reason);
              errorFound = true;
          }
          assert.equal(errorFound, false, "❌ can not transfer Approved account");
          assert.equal(ownerBefore == ownerAfter, false, "❌ failed to change Owners");
      })

    });

    describe('🏡 ✅ have ownership properties', function () {
        beforeEach(async function () {
          this.contract = await ERC721MintableComplete.new({ from: account_one });
        })

        it('🏡 should fail when minting when address is not contract owner', async function () { 
          let accessDenied = false
          try {
            await this.contract.mint(account_two, 10, baseTokenURI, { from: account_two });
          } catch (e) {
            console.log(e.reason);

            accessDenied = true
          }
          assert(accessDenied, true , '❌ only contract owner can mint new token')
        })

        it('🏡 should return contract owner', async function () { 
          let result = await this.contract.owner();
          assert.equal(account_one, result,'❌ owner was not set properly');
        })

    });
})