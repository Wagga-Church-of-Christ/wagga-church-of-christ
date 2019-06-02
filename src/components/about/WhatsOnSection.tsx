import React from 'react';

const WhatsOnSection = (props) => {
  return (
    <div>
      <h2>Midweek Meetings</h2>
      <table className="table">
        <tbody>
          <tr><td>Home Groups</td><td>Various dates and times</td></tr>
          <tr><td>Youth discipleship training</td><td>Friday 7:00 pm at the church</td></tr>
          <tr><td>Know your Bible (KYB)</td><td>Wednesday 1:30 pm at the church</td></tr>
        </tbody>
      </table>
      <br />

      <h2>Sunday Meetings</h2>
      <table className="table">
        <tbody>
          <tr><td>Before Church Prayer Meeting</td><td>9:00 am</td></tr>
          <tr><td>Kids Church</td><td>9:15 am</td></tr>
          <tr><td>Church Meeting</td><td>10:00 am</td></tr>
          <tr><td>Let the Search Begin</td><td>3:30 pm</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default WhatsOnSection;
