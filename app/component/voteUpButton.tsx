'use client';
import React from 'react';

function VoteButton({ params }: any) {
  // Destructure params from props
  const voteUp = async () => {
    // console.log(params.comment); // Log params.comment instead of comment
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
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to vote up:', error.message);
        if ('response' in error) {
          console.error('Response status:', error.response.status);
          console.error('Response body:', error.response.data);
        }
      }
    }
  };

  return <button onClick={voteUp}>Vote Up</button>;
}

export default VoteButton;
