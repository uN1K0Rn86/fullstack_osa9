import type { DiaryEntry } from '../types';

interface DiariesProps {
  diaries: DiaryEntry[];
}

const Diaries = ({ diaries }: DiariesProps) => {
  return (
    <table>
      <thead>
        <tr>
          <td>
            <b>Date</b>
          </td>
          <td>
            <b>Visibility</b>
          </td>
          <td>
            <b>Weather</b>
          </td>
          <td>
            <b>Comment</b>
          </td>
        </tr>
      </thead>
      <tbody>
        {diaries.map(d => (
          <tr key={d.id}>
            <td>{d.date}</td>
            <td>{d.visibility}</td>
            <td>{d.weather}</td>
            <td>{d.comment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Diaries;
