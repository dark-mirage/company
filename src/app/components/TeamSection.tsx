"use client";

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
}

const TeamSection: React.FC = () => {
  const team: TeamMemberProps[] = [
    {
      name: 'Анвар Ахмедов',
      position: 'Генеральный директор',
      bio: 'Опыт в технологическом секторе более 15 лет'
    },
    {
      name: 'Тимур Юлдашев',
      position: 'Технический директор',
      bio: 'Эксперт в области машинного обучения и больших данных'
    },
    {
      name: 'Али Асхабов',
      position: 'Финансовый директор',
      bio: 'Управлял финансами в крупнейших технологических компаниях'
    }
  ];

  const TeamMember: React.FC<TeamMemberProps> = ({ name, position, bio }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-blue-600 font-medium mb-3">{position}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  );

  return (
    <section id="team" className="py-20 max-[400px]:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl">
              Наша{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                команда
              </span>
            </h2>
          <p className="text-gray-600 mx-auto text-[14px] sm:text-base md:text-xl  max-w-md sm:max-w-xl md:max-w-2xl">
            Опытные профессионалы, которые строят будущее электронной коммерции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection