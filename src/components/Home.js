import React, { Component } from 'react';
import BlogCard from './BlogCard';
// view list of all the blogs
class Home extends Component {
  // Uses container

  render() {
    let blogArray = Object.values(this.props.blogs);
    return (
      <div className="row">
        {blogArray.map(blog => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
