import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contributors = () => {
    const contributorsData = [
        {
          id: 1,
          name: 'Emmanuel Allan M J',
          designation: 'Project Lead',
          description: 'Versatile creator with a flair for innovation.',
          image: '/allan.JPG',
          socialMedia: {
            instagram: '',
            github: 'EmmanuelAllanMJ',
            linkedin: 'emmanuel-allan/',
          },
        },
        {
          id: 1,
          name: 'Malay Kumar',
          designation: 'Web Dev',
          description: 'Quirky visionary, perpetually exploring innovation.',
          image: 'malay.JPG',
          socialMedia: {
            instagram: '',
            github: 'Malay-dev',
            linkedin: 'malayk/',
          },
        },
        {
          id: 1,
          name: 'Vasu Bhasin',
          designation: 'Web Dev',
          description: 'A dynamic individual fueled by curiosity, creativity, and an unwavering passion.',
          image: 'vasu.jpg',
          socialMedia: {
            instagram: 'vasu.bhasin',
            github: 'VasuBhasin15',
            linkedin: 'vasu-bhasin-47b17a251/',
          },
        },
        {
          id: 1,
          name: 'Harsh Jain',
          designation: 'Web Dev',
          description: 'Creative problem-solver, always seeking new challenges.',
          image: 'harsh.JPG',
          socialMedia: {
            instagram: 'harsh.jn18',
            github: 'Harsh-jn',
            linkedin: 'harsh-jain-09a79b223/'
          },
        },
        {
          id: 1,
          name: 'H G Leerish Arvind',
          designation: 'Web Dev ',
          description: 'Passionate Front-End Developer ',
          image: 'leerish.JPG',
          socialMedia: {
            instagram: '',
            github: 'Leerish',
            linkedin: 'leerish-arvind-23678b228/',
          },
        },
        {
          id: 1,
          name: 'Ramireddy Jeevan Reddy',
          designation: 'Web Dev',
          description: 'A lifelong learner committed to personal and professional growth.',
          image: 'jeevan.JPG',
          socialMedia: {
            instagram: '',
            github: 'RamireddyJeevanReddy',
            linkedin: 'ramireddy-jeevan-reddy-731a4b233',
          },
        },
        {
          id: 1,
          name: 'Prajjwal Kumar',
          designation: 'Management',
          description: 'Good leader with capability of managing people and delegation of work',
          image: 'Prajjwal1.JPG',
          socialMedia: {
            instagram: 'Prajjwal_538',
            github: 'Prajjwal-Kumar',
            linkedin: 'prajjwal-kumar-246265279/',
          },
        },
        {
          id: 1,
          name: 'Akshat Gupta',
          designation: 'Management',
          description: ' Passionate Blockchain developer',
          image: 'Akshat.JPG',
          socialMedia: {
            instagram: '',
            github: 'akshatgupta-1',
            linkedin: 'akshatgupta2003',
          },
        },
        {
          id: 1,
          name: 'Arvind Venkat Ramanan',
          designation: 'dhfosh',
          description: ' sdb shdbisbdsb sdhbksbhds',
          image: 'img1.jpg',
          socialMedia: {
            instagram: '',
            github: '',
            linkedin: '',
          },
        },
        {
          id: 1,
          name: 'Faisal',
          designation: 'sdsdsd',
          description: ' sgkdvakusv adfagehge ergewhb ',
          image: 'img1.jpg',
          socialMedia: {
            instagram: '',
            github: '',
            linkedin: '',
          },
        },
        {
          id: 1,
          name: 'Vinnu',
          designation: 'asdfsegrtr',
          description: ' dsfaew ergewg r3wgt4w ergtw ',
          image: 'img1.jpg',
          socialMedia: {
            instagram: '',
            github: '',
            linkedin: '',
          },
        },
      ];

  return (
    <div className="contributors-container max-w-3xl mx-auto">
      <h1 className="text-white text-3xl font-bold mb-4 mt-8">CONTRIBUTORS</h1>
      <div className="contributors-list grid grid-cols-2 gap-4">
        {contributorsData.map(contributor => (
          <div key={contributor.id} className="contributor-card flex items-center bg-gray-200 rounded-md p-4">
            <div className="contributor-image">
              <img src={contributor.image} alt={contributor.name} className="w-12 h-16 object-cover mr-4" />
            </div>
            <div className="contributor-info">
              <h2 className="text-black text-lg font-bold ml-8">{contributor.name}</h2>
              <p className="designation text-gray-600 ml-8">{contributor.designation}</p>
              <p className="text-black ml-8">{contributor.description}</p>
              <div className="social-media flex ml-8">
                {contributor.socialMedia.instagram && (
                  <a href={`https://instagram.com/${contributor.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="text-black mr-2">
                    <FaInstagram className="inline-block w-6 h-6" />
                  </a>
                )}
                {contributor.socialMedia.github && (
                  <a href={`https://github.com/${contributor.socialMedia.github}`} target="_blank" rel="noopener noreferrer" className="text-black mr-2">
                    <FaGithub className="inline-block w-6 h-6" />
                  </a>
                )}
                {contributor.socialMedia.linkedin && (
                  <a href={`https://linkedin.com/in/${contributor.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-black mr-2">
                    <FaLinkedin className="inline-block w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
