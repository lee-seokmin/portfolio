import React from 'react';
import StudysData from '../../public/json/studys.json';

interface StudyItem {
  id: number;
  StudyName: string;
  StudyPeriod: string;
  StudyDesc: string[];
}

const Studys: React.FC = () => {
  const studys: StudyItem[] = StudysData.slice().reverse();

  return (
    <div className="flex flex-col gap-3">
      {studys.map((study, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex gap-3 items-baseline">
            <span>-</span>
            <span className="text-base font-bold">{study.StudyName}</span>
            <span className="text-sm opacity-30">{study.StudyPeriod}</span>
          </div>
          {study.StudyDesc.map((desc, descIndex) => <span key={descIndex} className="text-sm opacity-70 ml-6">{desc}</span>)}
        </div>
      ))}
    </div>
  );
};

export default Studys;
