import { useEffect, useState } from 'react';
import { getDiaries } from './services/diaryService';
import type { DiaryEntry } from './types';
import Diaries from './components/Diaries';
import AddDiaryForm from './components/AddDiaryForm';
import './styles.css';

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getDiaries().then(data => {
      setDiaries(data);
    });
  }, []);

  return (
    <div>
      <h2>Add a New Entry</h2>
      <AddDiaryForm diaries={diaries} setDiaries={setDiaries} />
      <h2>Diary Entries</h2>
      <Diaries diaries={diaries} />
    </div>
  );
};

export default App;
