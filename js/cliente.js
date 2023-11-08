const clientName = "Paco"
const money = 300

//IIFE function
/*;(() => {
    window.clientName = "Paco"
})*/
const showClientData = (clientName, money) => {
    console.log(`Name: ${clientName} Money: ${money}`)
}
class Client{
    constructor(clientName, money){
        this.clientName = clientName
        this.money = money
    }
}
const defaultFuncTest = () =>{
    console.log("Default function test")
}
export {clientName, money, showClientData, Client}
export default defaultFuncTest;