const bookURL='http://localhost:3030/books'

export async function createBook(book){

      const res=await fetch(bookURL +'/create',{
            method:'post',
            headers:{
                  'Content-type':'application/json',
                  'Authorization':sessionStorage.getItem('accessToken')
            },
            body:JSON.stringify({
                  title:book.title,
                  author:book.author,
                  genre:book.genre,
                  stars:Number(book.stars),
                  image:book.image,
                  description:book.description
            })
      })

      const result=await res.json();
       return result;
}


export async function getAll(){

      const res=await fetch(bookURL);
      const data=await res.json();

      return data;
}

export async function getById(bookId){

      const res= await fetch(bookURL+'/'+bookId)
      const data=await res.json();


      return data;
}

export async function updateBook(bookId,book){
      const res=await fetch(bookURL +'/edit/'+bookId,{
            method:'post',
            headers:{
                  'Content-type':'application/json',
                  'Authorization':sessionStorage.getItem('accessToken')
            },
            body:JSON.stringify({
                  title:book.title,
                  author:book.author,
                  genre:book.genre,
                  stars:Number(book.stars),
                  image:book.image,
                  description:book.description
            })
      })

      const result=await res.json();
       return result;
}

export async function deleteBook(bookId){

      const res=await fetch(bookURL+'/'+bookId,{
            method:'delete',
      })

      return res.json();
}

export async function wishBook(bookId){
      const res=await fetch(bookURL+'/wish/'+bookId,{
            method:'post',
            headers:{
                  'Content-type':'application/json',
                  'Authorization':sessionStorage.getItem('accessToken')
            },
      })

      return res.json();
}

export async function likeBook(bookId){
      const res=await fetch(bookURL+'/like/'+bookId,{
            method:'post',
            headers:{
                  'Content-type':'application/json',
                  'Authorization':sessionStorage.getItem('accessToken')
            },
      })

      return res.json();
}

export async function getUserBooks(){
      const res= await fetch(bookURL+'/profile',{
            method:'get',
            headers:{
                  'Content-type':'application/json',
                  'Authorization':sessionStorage.getItem('accessToken')
            },
      });
      const data=res.json();

      return data;
}
