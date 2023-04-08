const URL='http://localhost:3030/auth'

export async function register(user){

      const result=await fetch(URL+'/register',{
            method:'post',
            headers:{
                  'Content-Type':'application/json'
            },
            body:JSON.stringify({
                  username:user.username,
                  email:user.email,
                  password:user.password
            })
      })
     
            const userData=await result.json();
            setUserData(userData);
            return userData;

    
}
export async function login(email,password){
      try {
            const result=await fetch(URL+'/login',{
                  method:'post',
                  headers:{
                        'Content-Type':'application/json'
                  },
                  body:JSON.stringify({
                        email,
                        password
                  })
            })
            if(result.status===401){
            const res=await result.json();
            throw new Error (res.message)
            }
            if(result.status===200){
                  const userData=await result.json();
                  setUserData(userData);
                  return userData;
            }
           
            
      } catch (error) {
      
            throw new Error(error)
      }
      
}

export function setUserData(userData){
      sessionStorage.setItem('username',userData.username);
      sessionStorage.setItem('_id',userData._id);
      sessionStorage.setItem('accessToken',userData.accessToken);
}
export function removeUserData(){
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('_id');
}

export function checkForUser(){
      if(sessionStorage.getItem('username'))
      {
           return {
            _id:sessionStorage.getItem('_id'),
            username:sessionStorage.getItem('username'),
            accessToken:sessionStorage.getItem('accessToken')
           }
      }else{
           return {}
      }
}

