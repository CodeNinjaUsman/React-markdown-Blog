import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'markdown-to-jsx';
import rehypeRaw from 'rehype-raw';
import Code from "./Code"
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [markdown, setMarkdown] = useState('');
  const [isDark, setIsDark] = useState(true)
  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }

    fetch(blog.url)
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <h1>{blog.title}</h1>
          </header>
          <img src={blog.cover} alt='cover' />
          <ReactMarkdown
            options={{
              overrides: {
                Code: {
                  component: Code,
                  props: {
                    isDark,
                    setIsDark
                  }
                }
              },
              markdownOptions: {
                gfm: true
              }
            }}
          >
            {markdown}
          </ReactMarkdown>

        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
