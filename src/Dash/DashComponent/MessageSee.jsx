import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const MessageSee = () => {

const axiosPublic = useAxiosPublic();

const {data:messages=[]} = useQuery({
      queryKey: ['messages'],
      queryFn: async() => {
          const res = await axiosPublic.get('/get-message')
          return res.data
      }
  })

    return (
<div className="max-w-4xl mx-auto p-6 space-y-6">
  <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">Messages</h2>

  {messages.length === 0 && <p className="text-gray-400">No messages found.</p>}

  {messages.map(({ _id, name, email, subject, message, date }) => (
    <div
      key={_id}
      className="bg-gradient-to-bl from-purple-600/20 via-indigo-500/30 to-sky-500/20 border border-y-purple-500/50 border-x-sky-500/50 rounded-lg p-6 shadow-lg text-white"
    >
      {/* Subject */}
      <h3 className="text-2xl font-extrabold mb-3">{subject}</h3>

      {/* Sender Info */}
      <p className="text-sm text-indigo-300 mb-4">
        <span className="font-semibold">From:</span> {name} &lt;<a href={`mailto:${email}`} className="underline hover:text-indigo-100">{email}</a>&gt;
      </p>

      {/* Message Content */}
      <p className="whitespace-pre-wrap mb-5 text-gray-200 leading-relaxed">{message}</p>

      {/* Date */}
      <p className="text-xs text-gray-400 italic text-right">
        Sent on:{' '}
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
    </div>
  ))}
</div>
    );
};

export default MessageSee;