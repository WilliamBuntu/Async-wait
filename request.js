// const getTodos = (resource) =>{
//     return new Promise((resolve, reject) =>{

//         const request = new XMLHttpRequest()
//         request.addEventListener('readystatechange', ()=>{
//             if(request.readyState ===4 && request.status === 200 ){
//                 const data = JSON.parse(request.responseText)
//                 resolve(data)
//             } else if (request.readyState === 4){
//                 reject('could not fetch the data')
//             }
//         })
        
//         request.open('GET',resource)
//         request.send()
        
//     })

  
// }

// const getSomething = () =>{
//     return new Promise((resolve, reject)=>{
//         //fetch something
//         resolve('some data')
//         reject('some error')
//     })
// }

// getSomething().then(data => {
//     console.log(data)
// }).catch( err =>{
//     console.log(err)
// })


// fetch('./request.json')
// .then((response)=>{
//     console.log('resolved', response)
   
//  return  response.json()
// })
// .then(data => console.log(data))
// .catch((err)=>{
//     console.log( 'rejected', err)
// })


// sync and wait

const getTodos = async ()=>{
const response = await fetch('./request.json')
if (response.status !== 200){
    throw new Error('can not fetch the data')
}
const data = await response.json()

return data
}

getTodos()
.then(data => console.log ('resolved', data))
.catch(err => console.log ('rejected :', err.message) )