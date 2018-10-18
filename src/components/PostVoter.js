import React from 'react';
import PropTypes from 'prop-types';

const PostUpvoter = (props) => {
  const onActionVote = (upvote) => {
    return () => {
      const { id, votes, onActionVote } = props;
      if (!!onActionVote) {
        onActionVote(id, upvote ? votes + 1 : votes - 1);
      }
    };
  };
  return (
    <div className="flex-horizontal-center">
      <button className="button" onClick={onActionVote(false)}>
        Downvote
      </button>
      <strong className="pl10 pr10">{props.votes}</strong>
      <button className="button" onClick={onActionVote(true)}>
        Vote
      </button>
    </div>
  );
};

PostUpvoter.propTypes = {
  onActionVote: PropTypes.func.isRequired,
};

export default PostUpvoter;
