import React  from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css' ;
import { useEffect, useState } from 'react';

const Slug = (props) => {
    const [blogs,setblogs]= useState(props.blogdata)
    
    return <div  className={styles.container}>
        <main className={styles.main}>
        <h1>{blogs && blogs.title}</h1>
        <hr />
        <div>
            {blogs && blogs.content} </div>
        </main>
        </div>;
};

export async function getServerSideProps(context) {
  // console.log(context);
  const {slug} = context.query;
  let data= await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let blogdata = await data.json();
  return {
    props: {blogdata}, // will be passed to the page component as props
  }
}

export default Slug;