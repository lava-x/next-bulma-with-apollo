import React from 'react';
import PropTypes from 'prop-types';

const PostUpvoter = (props) => {
  const onActionUpvote = () => {
    const { id, votes, onActionUpvote } = props;
    if (!!onActionUpvote) {
      onActionUpvote(id, votes);
    }
  };
  return (
    <div className="flex-horizontal-center">
      <strong className="mr10">{props.votes}</strong>
      <button className="button" onClick={onActionUpvote}>
        Vote
      </button>
    </div>
  );
};

PostUpvoter.propTypes = {
  onActionUpvote: PropTypes.func.isRequired,
};

export default PostUpvoter;
