import axios from 'axios';
import type { DiaryEntry, NewDiaryEntry } from '../types';

const baseUrl = 'http://localhost:3000/api/diaries';

export const getDiaries = () => {
  return axios.get<DiaryEntry[]>(baseUrl).then(response => response.data);
};

export const addDiary = async (newEntry: NewDiaryEntry) => {
  try {
    const addedEntry = await axios.post<DiaryEntry>(baseUrl, newEntry);
    return addedEntry.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data;
      throw new Error(`Failed to add diary: ${message}`);
    } else {
      console.error(error);
    }
  }
};
