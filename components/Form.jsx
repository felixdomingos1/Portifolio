'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare, Podcast } from 'lucide-react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-email', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          subject:'',
          message: ''
        })
        alert('Email enviado com sucesso!');
      } else {
        alert('Falha ao enviar o email.');
      }
    } catch (error) {
      alert('Erro ao enviar o email.');
    }
  };

  return (
    <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
      <div className='relative flex items-center'>
        <Input type='text' id='name' placeholder='Name' value={formData.name} onChange={handleChange} />
        <User className='absolute right-6' size={20} />
      </div>
      <div className='relative flex items-center'>
        <Input type='email' id='email' placeholder='Email' value={formData.email} onChange={handleChange} />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      <div className='relative flex items-center'>
        <Input type='subject' id='subject' placeholder='Assunto' value={formData.subject} onChange={handleChange} />
        <Podcast className='absolute right-6' size={20} />
      </div>
      <div className='relative flex items-center'>
        <Textarea id='message' placeholder='Type Your Message Here.' value={formData.message} onChange={handleChange} />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      <Button className='flex items-center gap-x-1 max-w-[166px]' type='submit'>
        Vamos conversar
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
