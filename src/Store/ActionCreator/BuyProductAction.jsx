export const BuyItem = (Price) => {
    return ( dispatch)=>{
           dispatch({
               type: "buy",
               payload: Price

           })
    }
}
    
export const CancelItem = (Price) => {
    return ( dispatch)=>{
           dispatch({
               type: "cancel",
               payload: Price

           })
    }
}
    
