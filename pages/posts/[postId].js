import React from 'react'
import { useRouter } from "next/router";
import { allPosts } from 'contentlayer/generated'
import parse from 'html-react-parser';



function Icerik() {
  const router=useRouter();
  const icerik=router.query.postId;
  const makale=allPosts.filter((post)=>post.url===("/posts/"+icerik));
  console.log(makale);
  const eleman=makale[0].body.html;

  return (

    <div className='flex flex-col m-6'>
      <h2 className='text-2xl'>{makale[0].title}</h2>
      {parse(eleman)}
      <p>{makale[0].date}</p>
    </div>
  )
}

export default Icerik