import React from 'react';

const WhatsOnSection = (props) => {
  return (
    <div>
      <h2>Midweek Meetings</h2>
      <table className="table">
        <tbody>
          <tr><td>An Item</td><td>When</td></tr>
        </tbody>
      </table>
      <br />

      <h2>Sunday Meetings</h2>
      <table className="table">
        <tbody>
          <tr><td>Before Church Prayer Meeting</td><td>9:00 am</td></tr>
          <tr><td>Sunday school</td><td>9:15 am</td></tr>
          <tr><td>Church</td><td>10:00 am</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default WhatsOnSection;
