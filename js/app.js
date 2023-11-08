import defaultFuncTest, {clientName, money, showClientData, Client} from "./cliente.js";

console.log(clientName)
console.log(money)
showClientData(clientName, money)

const client = new Client("Pepe", 1000)
console.log(client.clientName)
console.log(client.money)

defaultFuncTest()
