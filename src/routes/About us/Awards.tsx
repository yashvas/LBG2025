import React from 'react';


const Awards = () => {
  const awards = [
    {
      title: 'FStech Awards 2025 🏅',
      description: 'Recognised for best use of data and consumer finance innovation.',
    },
    {
      title: 'Business Culture Award 🌟',
      description: 'Winner for cultural excellence, diversity & inclusion, and leadership.',
    },
    {
      title: 'Princess Royal Training Award 🎓',
      description: 'Honoured multiple years for outstanding staff training and leadership development.',
    },
    {
      title: 'Employee Benefits Award 2025 🧡',
      description: 'Winner for best reproductive health support and inclusive employee benefits.',
    },
  ];

  return (
    <div style={styles.container}>
      {awards.map((award, index) => (
        <div key={index} style={styles.card}>
          <h3 style={{color: "black"}}>{award.title}</h3>
          <p style={{color: "black"}}>{award.description}</p>
        </div>
      ))}
    </div>
  );
};

// Inline CSS styles
// ...existing code...
const styles: { container: React.CSSProperties; card: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
  },
  card: {
    flex: '1 1 22%',
    minWidth: '250px',
    backgroundColor: '#f4f4f4',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
};
// ...existing code...
export default Awards;