export function setCurrentUser(user){//user:{id,name,identity}
    localStorage.setItem('currentUser',JSON.stringify(user))
}
export function getCurrentUser(){
    return JSON.parse(localStorage.getItem('currentUser'))
}
export function removeCurrentUser(){
    localStorage.removeItem('currentUser')
}
export function isLogin(){
    return getCurrentUser()?.id!==undefined
}
export function identityURL(){
    const urls=['/manager','/researcher','/inspector','/controller']
    return urls[getCurrentUser()?.identity]
}
export const absoluteCenter={
    position:'fixed',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)'
}
export const Status=[null,'已申请','已受理','已发放']