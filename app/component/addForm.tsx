'use client';
import { useState } from 'react';
type Params = {
  params: {
    id: string;
  };
};

function AddForm({ params: { id } }: Params) {
  const [content, setComment] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const commentData = {
      content: content,
      coincommentId: id,
      authorId: 1,
    };

    try {
      const res = await fetch('http://localhost:3000/api/', {
        //when deployed, change to the domain name
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      setComment(''); // Clear the input field
    } catch (error) {
      console.error('An error occurred while posting the comment.', error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="z-50 absolute text-zinc-950">
      <label>
        Comment:
        <input
          type="text"
          value={content}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddForm;
