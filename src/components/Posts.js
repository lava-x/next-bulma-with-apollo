import React, { PureComponent } from 'react';
import Moment from 'react-moment';
import PostVoter from 'components/PostVoter';

export default class Posts extends PureComponent {
  render() {
    const { posts, meta, loading, onActionVote } = this.props;
    const areMorePosts = posts.length < meta.count;
    return (
      <div className="p10 has-text-centered">
        <div className="columns is-multiline is-narrow">
          {posts.map((post) => (
            <div key={post.id} className="column is-one-quarter">
              <div className="box">
                <div className="content">
                  <p className="has-text-weight-bold">{post.title}</p>
                  <small>
                    <Moment format="do,MMM YYYY hh:mm:ss A">
                      {post.createdAt}
                    </Moment>
                  </small>
                </div>
                <PostVoter
                  id={post.id}
                  votes={post.votes}
                  onActionVote={onActionVote}
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
