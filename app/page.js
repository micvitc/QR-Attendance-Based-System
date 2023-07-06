"use client";
export default function SimpleCard() {

  return (
    <>
    <div className="a1">
        <div className="a5" style={{ borderRadius: '10px', backgroundColor: 'rgb(227, 226, 226)', marginTop: '8%', marginLeft: '15%', marginRight: '15%', paddingTop: '20px', paddingBottom: '15px', paddingLeft: '15px', paddingRight: '15px' }}>
          <h1 className="head" style={{ paddingLeft: '20px' , fontSize:'30px'}}>Revolutionizing Attendance Tracking</h1>
          <br/>
          <div className="a2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0%' }}>
            <p className="a3" style={{ maxWidth: '100%', maxHeight: '100%', paddingRight: '20px', paddingLeft: '20px', fontSize: '18px' }}>At QR Attendance Tracker, we are dedicated to revolutionizing attendance management for our club activities. With our innovative QR-based solution, we offer a seamless, efficient, and hassle-free way to track attendance. Say goodbye to the days of manual, time-consuming methods, and embrace the power of technology to streamline your attendance tracking process. With our platform, you can say goodbye to traditional time-consuming methods and embrace the power of technology.</p>
            <img className="a4" style={{ width: '16%', paddingLeft: '20px' }} src="/logo.png" alt="Logo" />
          </div>
          <br/><br/>
          <button className="button" style={{ borderColor: 'rgb(34, 240, 96)', paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', textAlign: 'center', backgroundColor: 'rgb(34, 240, 96)', cursor: 'pointer', borderRadius: '5px', fontSize: '15px', width: '18%', marginLeft: '41%', marginRight: '41%' }}><b>Get Started</b></button>
        </div>
      </div>
    </>
  );
}
