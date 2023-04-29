import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css' ;
import Link from 'next/link';
const Blog = (props) => {
  const [blogs,setblogs]= useState(props.allBlogs)
  console.log(props);
 
  // setblogs(props.data);
 
  return (
    <div  className={styles.container}>
      <main className={styles.main}>
        <h2>Popular Blogs</h2>
       { blogs.map((item)=>{
          return  <div key={item.slug} className={styles.container}>
           <Link  href={`/blogpost/${item.slug}`} >
           <h3>{item.title}</h3> </Link>
           <p className={styles.blogitemp}>{item.content.substr(0,140)}</p>
         </div>
        })}
        
       
        </main>
      </div>
  )
}

export async function getServerSideProps(context) {
  let data= await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog
