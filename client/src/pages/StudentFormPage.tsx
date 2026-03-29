import React, { useState } from 'react';
import styled from 'styled-components';
import { useCampaigns } from '../hooks/useCampaigns';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const PageTitle = styled.h1`
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.textMuted};
  margin-bottom: 40px;
  font-size: 16px;
`;

const Form = styled.form`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.lg};
  padding: 40px;
  background-color: white;
  box-shadow: ${(props) => props.theme.shadows.sm};
`;

const FormGroup = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text};
  }

  .error {
    color: #e74c3c;
    font-size: 12px;
    margin-top: 5px;
  }

  .help-text {
    color: ${(props) => props.theme.colors.textMuted};
    font-size: 13px;
    margin-top: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(34, 67, 144, 0.1);
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.accent};
    cursor: not-allowed;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(34, 67, 144, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  font-size: 14px;
  font-family: inherit;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(34, 67, 144, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 12px 30px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${(props) => props.theme.radius.md};
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 15px;
  border-radius: ${(props) => props.theme.radius.md};
  margin-bottom: 20px;
`;

const StudentFormPage: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { createCampaign, loading } = useCampaigns();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fundingGoal: '',
    category: 'education',
    timeline: '3',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Campaign title is required';
    } else if (formData.title.length < 10) {
      newErrors.title = 'Title must be at least 10 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 50) {
      newErrors.description = 'Description must be at least 50 characters';
    }

    if (!formData.fundingGoal) {
      newErrors.fundingGoal = 'Funding goal is required';
    } else if (parseInt(formData.fundingGoal) <= 0) {
      newErrors.fundingGoal = 'Funding goal must be greater than 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!isLoggedIn) {
      navigate('/');
      return;
    }

    try {
      await createCampaign({
        title: formData.title,
        description: formData.description,
        fundingGoal: parseInt(formData.fundingGoal),
        category: formData.category,
      });
      setSubmitted(true);
      setTimeout(() => {
        navigate('/campaigns');
      }, 2000);
    } catch (error) {
      console.error('[v0] Error creating campaign:', error);
      setErrors({ submit: 'Failed to create campaign. Please try again.' });
    }
  };

  if (submitted) {
    return (
      <Container>
        <SuccessMessage>
          <h3>Campaign Created Successfully!</h3>
          <p>Your campaign has been created. Redirecting to campaigns page...</p>
        </SuccessMessage>
      </Container>
    );
  }

  return (
    <Container>
      <PageTitle>Create a Campaign</PageTitle>
      <Subtitle>Start your fundraising journey and reach your educational goals</Subtitle>

      <Form onSubmit={handleSubmit}>
        {errors.submit && <SuccessMessage style={{ backgroundColor: '#f8d7da', borderColor: '#f5c6cb', color: '#721c24' }}>{errors.submit}</SuccessMessage>}

        <FormGroup>
          <label htmlFor="title">Campaign Title *</label>
          <Input
            id="title"
            type="text"
            name="title"
            placeholder="Give your campaign a catchy and descriptive title"
            value={formData.title}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.title && <p className="error">{errors.title}</p>}
          <p className="help-text">{formData.title.length}/50 characters</p>
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Description *</label>
          <Textarea
            id="description"
            name="description"
            placeholder="Tell us about your campaign, your goals, and how the funds will be used. Be as detailed as possible to help supporters understand your mission."
            value={formData.description}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.description && <p className="error">{errors.description}</p>}
          <p className="help-text">{formData.description.length}/1000 characters</p>
        </FormGroup>

        <FormGroup>
          <label htmlFor="fundingGoal">Funding Goal ($) *</label>
          <Input
            id="fundingGoal"
            type="number"
            name="fundingGoal"
            placeholder="Enter your target funding amount"
            value={formData.fundingGoal}
            onChange={handleChange}
            min="1"
            step="100"
            disabled={loading}
          />
          {errors.fundingGoal && <p className="error">{errors.fundingGoal}</p>}
          <p className="help-text">Set a realistic goal to increase your chances of success</p>
        </FormGroup>

        <FormGroup>
          <label htmlFor="category">Category *</label>
          <Select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="education">Education</option>
            <option value="research">Research</option>
            <option value="scholarship">Scholarship</option>
            <option value="skills">Skills Acquisition</option>
            <option value="other">Other</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="timeline">Campaign Timeline (months)</label>
          <Select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="1">1 month</option>
            <option value="3">3 months</option>
            <option value="6">6 months</option>
            <option value="12">12 months</option>
          </Select>
        </FormGroup>

        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Creating Campaign...' : 'Create Campaign'}
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default StudentFormPage;
