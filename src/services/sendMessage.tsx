import axios from 'axios';

interface SmsRequestBody {
  email: string;
  phone: string;
  products: string[];
}

export const sendSms = async (body: SmsRequestBody) => {
  try {
    const response = await axios.post('http://localhost:8080/sendSms', body);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const sendWhats = async (body: SmsRequestBody) => {
  try {
    const response = await axios.post('http://localhost:8080/sendWhats', body);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};