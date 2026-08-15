"use client"; import React from "react";


const SpokenEnglishOffer = () => {

    const handleSubscribe = () => {
        // TODO: Connect this button with your Razorpay/payment flow 
        console.log("Subscribe for ₹99");
    };
    return (
        <section className="spoken-english-section py-5">
            <div className="container">
                <div className="spoken-offer-card"> 
                    <div className="row align-items-center g-4"> 
                        {/* Left Content */} 
                        <div className="col-lg-7"> 
                            <div className="offer-badge"> 
                                🔥 LIMITED TIME OFFER </div> 
                                <h2 className="offer-title"> Stop Learning English. <br /> 
                                <span>Start Speaking It.</span> 
                                </h2> <p className="offer-description">
                                     Practice speaking every day, build your confidence, and start speaking English naturally in real-life situations.
                                      </p> {/* Benefits */} 
                                      <div className="row g-3 mt-4">
                                         <div className="col-sm-6"> 
                                            <div className="benefit-item"> 
                                                <div className="benefit-icon">🎙️</div>
                                                 <div> <h6>Daily Speaking Practice</h6> 
                                                 <p>Practice English every day</p> </div>
                                                  </div> </div> 
                                                  <div className="col-sm-6"> 
                                                    <div className="benefit-item"> 
                                                        <div className="benefit-icon">💬</div> 
                                                        <div> <h6>Real Conversations</h6> 
                                                        <p>Learn to speak naturally</p> </div> 
                                                        </div> </div> <div className="col-sm-6"> 
                                                            <div className="benefit-item"> <div className="benefit-icon">🚀</div> 
                                                            <div> <h6>Build Confidence</h6> <p>Speak without hesitation</p> </div> </div> </div> <div className="col-sm-6"> <div className="benefit-item"> <div className="benefit-icon">📈</div> <div> <h6>Track Your Progress</h6> <p>Improve step by step</p> </div> </div> </div> </div> </div> {/* Pricing Card */} <div className="col-lg-5"> <div className="price-card"> <div className="price-card-top"> <span>1-Year Speaking Practice Pass</span> </div> <div className="price-wrapper"> <span className="old-price">₹3,999</span> <div className="price"> <span className="currency">₹</span> <span className="amount">99</span> </div> <span className="price-period">/ year</span> </div> <div className="saving-badge"> Save ₹3,900 </div> <p className="price-description"> Get unlimited access to your English speaking practice journey for an entire year. </p> <button type="button" className="subscribe-btn" onClick={handleSubscribe} > Start Speaking for ₹99 <span> →</span> </button> <div className="secure-text"> 🔒 Secure payment &nbsp; • &nbsp; 1-year access </div> </div> </div> </div> </div> </div> <style jsx>{` .spoken-english-section { background: radial-gradient( circle at 10% 20%, rgba(255, 193, 7, 0.12), transparent 30% ), linear-gradient(135deg, #f8faff 0%, #eef3ff 100%); } .spoken-offer-card { position: relative; overflow: hidden; padding: 55px; border-radius: 30px; background: #ffffff; border: 1px solid rgba(13, 37, 76, 0.08); box-shadow: 0 25px 70px rgba(13, 37, 76, 0.12); } .spoken-offer-card::before { content: ""; position: absolute; width: 300px; height: 300px; border-radius: 50%; background: rgba(255, 193, 7, 0.12); top: -150px; right: -100px; } .offer-badge { display: inline-flex; align-items: center; padding: 8px 16px; border-radius: 50px; background: #fff4d6; color: #9a6a00; font-size: 13px; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 18px; } .offer-title { position: relative; margin-bottom: 18px; color: #102a56; font-size: clamp(34px, 4vw, 52px); line-height: 1.08; font-weight: 800; letter-spacing: -1.5px; } .offer-title span { color: #ffb800; } .offer-description { max-width: 650px; margin-bottom: 0; color: #667085; font-size: 18px; line-height: 1.7; } .benefit-item { display: flex; align-items: center; gap: 14px; padding: 14px; border-radius: 14px; background: #f8faff; } .benefit-icon { display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; flex-shrink: 0; border-radius: 12px; background: #102a56; font-size: 20px; } .benefit-item h6 { margin: 0 0 3px; color: #102a56; font-size: 14px; font-weight: 700; } .benefit-item p { margin: 0; color: #8a94a6; font-size: 12px; } .price-card { position: relative; z-index: 2; padding: 35px 30px; border-radius: 24px; background: #102a56; color: #ffffff; text-align: center; box-shadow: 0 20px 45px rgba(16, 42, 86, 0.25); } .price-card-top { margin-bottom: 22px; color: #dbe6ff; font-size: 14px; font-weight: 600; } .old-price { display: block; margin-bottom: 3px; color: #aab8d1; font-size: 18px; text-decoration: line-through; } .price { display: inline-flex; align-items: flex-start; color: #ffffff; line-height: 1; } .currency { margin-top: 8px; font-size: 28px; font-weight: 700; } 
                                                            .amount { font-size: 82px; font-weight: 800; letter-spacing: -4px;color:white } .price-period { margin-left: 7px; color: #b8c7df; font-size: 14px; } .saving-badge { display: inline-block; margin: 12px 0 18px; padding: 7px 14px; border-radius: 50px; background: #ffc107; color: #102a56; font-size: 13px; font-weight: 800; } .price-description { margin: 0 auto 24px; max-width: 310px; color: #c3d0e6; font-size: 14px; line-height: 1.6; } .subscribe-btn { width: 100%; padding: 16px 22px; border: 0; border-radius: 14px; background: #ffb800; color: #102a56; font-size: 16px; font-weight: 800; cursor: pointer; transition: all 0.25s ease; } .subscribe-btn:hover { transform: translateY(-2px); background: #ffc933; box-shadow: 0 10px 25px rgba(255, 184, 0, 0.25); } .subscribe-btn span { margin-left: 5px; font-size: 20px; } .secure-text { margin-top: 15px; color: #8fa3c3; font-size: 11px; } @media (max-width: 991px) { .spoken-offer-card { padding: 35px 25px; } .offer-title { font-size: 40px; } } @media (max-width: 575px) { .spoken-offer-card { padding: 28px 18px; border-radius: 22px; } .offer-title { font-size: 34px; } .offer-description { font-size: 16px; } .benefit-item { padding: 12px; } .price-card { padding: 30px 20px; } .amount { font-size: 70px; } } `}</style> </section>);
}; export default SpokenEnglishOffer;