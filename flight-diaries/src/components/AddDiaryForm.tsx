import { useState } from 'react';
import {
  Visibility,
  Weather,
  type NewDiaryEntry,
  type DiaryEntry,
} from '../types';
import Select, { type SingleValue } from 'react-select';
import { addDiary } from '../services/diaryService';

interface DiaryFormProps {
  diaries: DiaryEntry[];
  setDiaries: React.Dispatch<React.SetStateAction<DiaryEntry[]>>;
}

const AddDiaryForm = ({ diaries, setDiaries }: DiaryFormProps) => {
  const [date, setDate] = useState('');
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Ok);
  const [weather, setWeather] = useState<Weather>(Weather.Sunny);
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const visibilityOptions = Object.values(Visibility).map(v => ({
    value: v,
    label: v,
  }));

  const weatherOptions = Object.values(Weather).map(v => ({
    value: v,
    label: v,
  }));

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newEntry: NewDiaryEntry = {
      date: date,
      visibility: visibility,
      weather: weather,
      comment: comment,
    };

    try {
      const addedDiary = await addDiary(newEntry);
      if (addedDiary) {
        setDiaries(diaries.concat(addedDiary));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unknown error occurred');
      }
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <div className="form-container">
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="visibility">Visibility: </label>
          <Select
            options={visibilityOptions}
            defaultValue={visibilityOptions[2]}
            onChange={(
              option: SingleValue<{ value: Visibility; label: Visibility }>
            ) => {
              if (option) setVisibility(option.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weather">Weather: </label>
          <Select
            options={weatherOptions}
            defaultValue={weatherOptions[0]}
            onChange={(
              option: SingleValue<{ value: Weather; label: Weather }>
            ) => {
              if (option) setWeather(option.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment: </label>
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </div>
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default AddDiaryForm;
