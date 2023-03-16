import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    url,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <Link to={`/blog/${id}`}>
        <img className='blogItem-cover' src={cover} alt='cover' />
      </Link>
      <Chip label={category} />
      <h3>{title}</h3>
      <footer>
      </footer>
    </div>
  );
};

export default BlogItem;
