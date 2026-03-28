import { GraduationCap } from 'lucide-react';
import yuhanLogo from '../assets/yuhan.png';
import dongyangLogo from '../assets/dongyang.png';

const education = [
  {
    school: '유한대학교',
    major: '컴퓨터소프트웨어공학과',
    degree: '전문학사',
    period: '2020.02 ~ 2025.02',
    logo: yuhanLogo,
  },
  {
    school: '동양미래대학교',
    major: '컴퓨터소프트웨어공학과',
    degree: '전공심화',
    period: '2025.03 ~ 2026.02',
    logo: dongyangLogo,
  },
];

export function Experience() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <h2 className="text-4xl text-gray-900">학력</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="flex items-center gap-6 bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <div className="flex-shrink-0">
                <img src={edu.logo} alt={edu.school} className="w-14 h-14 object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-gray-900 mb-1">{edu.school}</h3>
                <p className="text-blue-600 mb-1">{edu.major}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {edu.degree}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  졸업
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
