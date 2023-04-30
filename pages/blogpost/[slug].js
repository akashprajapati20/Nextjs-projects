import React  from 'react';
import * as fs from 'node:fs';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css' ;
import { useEffect, useState } from 'react';

const Slug = (props) => {
    const [blogs,setblogs]= useState(props.myBlog)
    
    return <div  className={styles.container}>
        <main className={styles.main}>
        <h1>{blogs && blogs.title}</h1>
        <hr />
        <div>
            {blogs && blogs.content} </div>
        </main>
        </div>;
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: {slug:'learn-flask'} },
      { params: {slug:"learn-javascript"} },
      { params: {slug:'learn-nextjs'} },
    
    ],
    fallback: true, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  // console.log(context);
  const {slug} = context.params;

 
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
   
  


  return {
    props: {myBlog: JSON.parse(myBlog)}, // will be passed to the page component as props
  }
}

export default Slug;