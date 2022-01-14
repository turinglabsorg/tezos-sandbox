const taquito = require('@taquito/taquito');
const signer = require('@taquito/signer');
const tezos = new taquito.TezosToolkit('http://localhost:20000');
console.log('Adding signer..')
tezos.setProvider({
    signer: new signer.InMemorySigner('edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq'),
});
let contractInstance
tezos.contract.at('KT1MXbXg7jk9Min5vfeJUXVoK3iE7q3ixVkA')
    .then(async (contract) => {
        contractInstance = contract
        console.log('Contract injected..')
        const storage = await contractInstance.storage()
        console.log('Storage is:', storage.toNumber())
        console.log('Incrementing by 10 the storage..')
        return contractInstance.methods.increment('10').send()
    }).then((op) => {
        console.log(`Waiting for ${op.hash} to be confirmed...`);
        return op.confirmation(1).then(() => op.hash);
    })
    .then(async (hash) => {
        console.log(`Operation injected: ${hash}`)
        const storage = await contractInstance.storage()
        console.log('Storage after operation is:', storage.toNumber())
    })
    .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`));