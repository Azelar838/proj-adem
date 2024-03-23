export const getTokens = () => {
  const tokens =  JSON.parse(localStorage.getItem('sb-ilojbumfvgjyaumjmcwy-auth-token')|| '{}') 
  console.log(tokens)
  return {
    access_token: tokens.provider_token,
    refresh_token: tokens.refresh_token,

  }
}


export const clearTokens = () => {
  localStorage.removeItem('sb-ilojbumfvgjyaumjmcwy-auth-token')
}
