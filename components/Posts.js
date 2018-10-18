import React, { PureComponent } from 'react';
import PostUpvoter from 'components/PostUpvoter';

export default class Posts extends PureComponent {
  render() {
    const { posts, meta, loading, onActionUpvote } = this.props;
    const areMorePosts = posts.length < meta.count;
    return (
      <div className="p10 has-text-centered">
        <div className="columns is-multiline is-narrow">
          {posts.map((post) => (
            <div key={post.id} className="column is-one-quarter">
              <div className="box">
                <div className="content">
                  <p className="has-text-weight-bold">{post.title}</p>
                  <small>{post.createdAt}</small>
                </div>
                <PostUpvoter
                  id={post.id}
                  votes={post.votes}
                  onActionUpvote={onActionUpvote}
                />
              </div>
            </div>
          ))}
        </div>
        {areMorePosts && (
          <button className="button" onClick={this.props.onActionLoadMore}>
            {loading ? 'Loading...' : 'Show More'}
          </button>
        )}
      </div>
    );
  }
}
