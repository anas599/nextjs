'use client';
import React from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { useState } from 'react';

function VoteButton({ params }: any) {
  const [downvoteCount, setDownVote] = useState(params.comment.upvote); // Initialize state with the current upvote count
  const voteDownButton = async () => {
    try {
      const response = await fetch(`/api/coinComment/votedown`, {
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
      setDownVote(data.upvote); // Update the upvote count state with the new count from the server
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to vote down:', error.message);
        // if ('response' in error) {
        //   console.error('Response status:', error.response.status);
        //   console.error('Response body:', error.response.data);
        // }
      }
    }
  };

  return (
    <div className="flex flex-row">
      <button onClick={voteDownButton} className="p-2">
        <FaArrowCircleDown />
        <p>{downvoteCount}</p>
      </button>
    </div>
  );
}

export default VoteButton;
