import CheckPortfolio from '../components/CheckPortfolio';

export default function portfolio() {
    return (
      <div className="container" id="buy" style={{ marginBottom: '40px' }}>
        <h1 className="heading">My Portfolio </h1>
        <CheckPortfolio/>
        <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .heading {
          font-size: 3rem; /* Increased font size */
          margin-top: 40px;
          color: #007bff; /* Blue color */
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Text shadow */
        }
      `}</style>
      </div>
    );
  }