export default function AddNewVisitors() {
    return (
      <div className="container">
        <header className="header">
          <h1>Add New Visitors</h1>
        </header>
        <div className="content">
          <h2>What’s your mobile number?</h2>
          <div className="mobile-input-group">
            <select className="country-code">
              <option value="IN">IN +91</option>
              <option value="US">US +1</option>
              <option value="UK">UK +44</option>
            </select>
            <input
              type="tel"
              placeholder="XXXXXXXXXX"
              className="mobile-input"
            />
          </div>
          <p className="description">
            We will send a text with a verification code. Message and data rates
            may apply.
          </p>
          <button className="continue-btn">CONTINUE</button>
        </div>
        <style jsx>{`
          .container {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
            background-color: #fff;
            color: #000;
          }
  
          .header {
            background-color: #c00;
            color: #fff;
            padding: 10px 0;
            font-size: 18px;
            font-weight: bold;
          }
  
          .content {
            margin-top: 50px;
            padding: 0 20px;
          }
  
          h2 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
          }
  
          .mobile-input-group {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
          }
  
          .country-code {
            font-size: 16px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
  
          .mobile-input {
            flex: 1;
            max-width: 250px;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
  
          .mobile-input::placeholder {
            color: #aaa;
          }
  
          .description {
            font-size: 14px;
            color: #555;
            margin-bottom: 30px;
          }
  
          .continue-btn {
            padding: 10px 15px;
            background-color: #c00;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            width: 100%;
            max-width: 400px;
          }
  
          .continue-btn:hover {
            background-color: #a00;
          }
        `}</style>
      </div>
    );
  }