import React from 'react';
import certificationsData from '../../public/json/certifications.json';

interface CertificationItem {
  id: number;
  Name: string;
  Date: string;
  State: string;
}

const Certifications: React.FC = () => {
  const certifications: CertificationItem[] = certificationsData.slice().reverse();

  return (
    <div className="flex flex-col gap-3">
      {certifications.map((certification, index) => (
        <div key={index} className="flex gap-3 items-baseline">
          <span>-</span>
          <span className="text-base font-bold">{certification.Name}</span>
          <span className="text-sm opacity-30">{certification.Date} {certification.State}</span>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
