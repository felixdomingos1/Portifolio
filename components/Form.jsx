'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare, Podcast } from 'lucide-react';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/styles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Por favor, preencha todos os campos.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide
      });
      return;
    }

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
          subject: '',
          message: ''
        });
        toast.success('Email enviado com sucesso!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide
        });
      } else {
        toast.error('Falha ao enviar o email.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide
        });
      }
    } catch (error) {
      toast.error('Erro ao enviar o email.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide
      });
    }
  };

  return (
    <div>
      <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
        <div className='relative flex items-center'>
          <Input
            type='text'
            id='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            // required
          />
          <User className='absolute right-6' size={20} />
        </div>
        <div className='relative flex items-center'>
          <Input
            type='email'
            id='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            // required
          />
          <MailIcon className='absolute right-6' size={20} />
        </div>
        <div className='relative flex items-center'>
          <Input
            type='text'
            id='subject'
            placeholder='Assunto'
            value={formData.subject}
            onChange={handleChange}
            // required
          />
          <Podcast className='absolute right-6' size={20} />
        </div>
        <div className='relative flex items-center'>
          <Textarea
            id='message'
            placeholder='Type Your Message Here.'
            value={formData.message}
            onChange={handleChange}
            // required
          />
          <MessageSquare className='absolute top-4 right-6' size={20} />
        </div>
        <Button className='flex items-center gap-x-1 max-w-[166px]' type='submit'>
          Vamos conversar
          <ArrowRightIcon size={20} />
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
