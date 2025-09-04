import { useEffect, useState } from 'react';
import { getDiaries } from './services/diaryService';
import type { DiaryEntry } from './types';
import Diaries from './components/Diaries';
import './styles.css';

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getDiaries().then(data => {
      setDiaries(data);
    });
  }, []);
  console.log(diaries);

  return (
    <div>
      <h2>Diary Entries</h2>
      <Diaries diaries={diaries} />
    </div>
  );
};

export default App;
