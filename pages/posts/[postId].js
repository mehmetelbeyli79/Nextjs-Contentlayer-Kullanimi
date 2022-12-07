import React from 'react'
import { useRouter } from "next/router";
import { allPosts } from 'contentlayer/generated'



function Icerik() {
  const router=useRouter();
  const icerik=router.query.postId;
  const makale=allPosts.filter((post)=>post.url===("/posts/"+icerik));
  console.log(makale);
  return (

    <div>
      <h2>{makale[0].title}</h2>
      <p>{makale[0].body.html}</p>
      <p>{makale[0].date}</p>
    </div>
  )
}

export default Icerik