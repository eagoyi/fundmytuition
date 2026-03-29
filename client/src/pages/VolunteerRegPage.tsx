import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const PageTitle = styled.h1`
  margin-bottom: 40px;
`;

const Form = styled.form`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.lg};
  padding: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  font-size: 14px;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${(props) => props.theme.radius.md};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const VolunteerRegPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: '',
    motivation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] Volunteer registration:', formData);
  };

  return (
    <Container>
      <PageTitle>Volunteer Registration</PageTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label>Full Name</label>
          <Input
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Email</label>
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Area of Expertise</label>
          <Input
            type="text"
            name="expertise"
            placeholder="What can you help with?"
            value={formData.expertise}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Motivation</label>
          <Textarea
            name="motivation"
            placeholder="Why do you want to volunteer?"
            value={formData.motivation}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <SubmitButton type="submit">Submit Application</SubmitButton>
      </Form>
    </Container>
  );
};

export default VolunteerRegPage;
