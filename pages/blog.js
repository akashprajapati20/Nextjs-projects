import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css' ;
import Link from 'next/link';
import * as fs from 'node:fs';

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
           <p className={styles.blogitemp}>{item.metadesc.substr(0,140)}</p>
         </div>
        })}
        
       
        </main>
      </div>
  )
}


export async function getStaticProps(context) {
  let data= await fs.promises.readdir("blogdata");
    let myFile;
    let allBlogs=[];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        // console.log(item);
        myFile= await fs.promises.readFile(("blogdata/"+item),'utf-8');
        allBlogs.push(JSON.parse(myFile));
        
    }


  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog
