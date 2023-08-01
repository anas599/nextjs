'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

type Params = {
  params: {
    id: string;
  };
};

function AddForm({ params: { id } }: Params) {
  const { data: session, status } = useSession();
  const nameAc = session?.user?.name;
  const userPic = session?.user?.image;
  // @ts-ignore
  const idAc = +session?.user?.id;
  const [content, setComment] = useState('');
  // console.log(idAc);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const commentData = {
      content: content,
      coincommentId: id,
      authorId: 1,
      username: nameAc,
      userpic: userPic,
    };

    try {
      const res = await fetch(
        // 'https://aws-deploy.d1ag4lutfl0s3j.amplifyapp.com/api/',
        `${process.env.DEPLOYDOMAIN}/api/`,
        {
          //when deployed, change to the domain name
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentData),
        },
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setComment(''); // Clear the input field
    } catch (error) {
      console.error('An error occurred while posting the comment.', error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="z-50 absolute text-zinc-950 mx-6 my-6 flex flex-col items-center justify-center sm:w-3/4 md:w-1/2 lg:w-1/3"
    >
      <label className="flex flex-col justify-center items-center mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">
        Add your Prediction and analysis in a comment:
        <input
          type="text"
          value={content}
          onChange={(e) => setComment(e.target.value)}
          className="h-20 block p-2.5 w-full sm:w-4/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </label>

      <button
        type="submit"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Add Comment
        </span>
      </button>
    </form>
  );
}

export default AddForm;
