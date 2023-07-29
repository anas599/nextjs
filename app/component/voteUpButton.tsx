'use client';
import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useState } from 'react';
function VoteButton({ params }: any) {
  const [upvoteCount, setUpvoteCount] = useState(params.comment.upvote); // Initialize state with the current upvote count

  const voteUp = async () => {
    try {
      const response = await fetch(`/api/coinComment/voteup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ coincommentId: params.comment.id }), // Use params.comment.id instead of comment.id
      });
      if (!response.ok) {
        const data = await response.json();
        const error = new Error(response.statusText) as any;
        error.response = {
          status: response.status,
          data: data,
        };
        throw error;
      }
      const data = await response.json();
      setUpvoteCount(data.upvote); // Update the upvote count state with the new count from the server
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to vote up:', error.message);
        // if ('response' in error) {
        //   console.error('Response status:', error.response.status);
        //   console.error('Response body:', error.response.data);
        // }
      }
    }
  };
  return (
    <div>
      <button onClick={voteUp} className="p-2 con">
        <FaArrowCircleUp />
      </button>
      <p>{upvoteCount}</p>
    </div>
  );
}

export default VoteButton;
