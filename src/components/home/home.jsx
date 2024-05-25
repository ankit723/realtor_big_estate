import React, {useState, useEffect} from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from './home.module.css'
import tabImage from '../background-images/tabInsideImage.jpeg'
import laptopImage from '../background-images/laptopImage.webp'
import client1 from "../parteners images/partener1.jpeg";
import client2 from "../parteners images/partener2.jpeg";
import client3 from "../parteners images/partener3.jpeg";
import client4 from "../parteners images/partener4.jpeg";
import client5 from "../parteners images/partener5.jpeg";
import client6 from "../parteners images/partener6.jpeg";
import client7 from "../parteners images/partener7.jpeg";
import client8 from "../parteners images/partener8.jpeg";
import client9 from "../parteners images/partener9.jpeg";
import client10 from "../parteners images/partener10.jpeg";
import client11 from "../parteners images/partener11.jpeg";
import client12 from "../parteners images/partener12.jpeg";
import client13 from "../parteners images/partener13.jpeg";
import client14 from "../parteners images/partener14.jpeg";
import client15 from "../parteners images/partener15.jpeg";
import banner2 from '../../icons/banner2.webp'

const Home=()=>{
    const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(30deg)');
    useEffect(() => {
        const handleScroll = () => {
        const tab=document.getElementById("tab");
          if (window.scrollY > 0) {
            setTransformStyle('none');
            tab.style.marginTop="7rem"
          } else {
            setTransformStyle('perspective(1000px) rotateX(30deg)');
            tab.style.marginTop="-2rem"
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <>

        <div className={classes.hero}>
            <h1 className={classes.mainHeading}>GET HIGH-QUALITY REAL ESTATE LEADS THAT CONVERTS</h1>

            <p className={classes.mainPara}>Stop Using the same old listing websites that share same leads to every Builder/Channel client. Get Exclusive One-on-One Integrated Real Estate Leads that Converts. Drive Consistent Site Visit & Revenue with our AI Marketing Approach.</p>

            <div className={classes.mainButtons}>
                <div className={classes.button}>
                    <button style={{fontSize:"1.2rem", padding:"0.8rem 0.4rem"}}>GET STARTED</button>
                </div>

                <div className={classes.button}>
                    <button style={{fontSize:"1.2rem", padding:"0.8rem 0.4rem"}}>GET STARTED</button>
                </div>
            </div>

            <div id="tab" className={classes.tabInner} style={{transform:transformStyle, marginBottom:"5rem"}}>
                <img className={classes.tabInnerMost} src={tabImage}/>
            </div>
        </div>

        <div className={classes.hero2} style={{backgroundColor:"white"}}>
            <h1 className={classes.mainHeading} style={{fontSize:"1.875rem", lineHeight:"2.25rem"}}>Struggling To Get Genuine Leads & Finding Potential Buyers?</h1>

            <div className={classes.keyLines}>
                <div className={classes.key}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classes.infoIcon}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"></path></svg>

                    <h3>Stop wasting your Time & Money on Listing Website.</h3>
                </div>

                <div className={classes.key}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classes.infoIcon}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"></path></svg>

                    <h3>Say Goodbye to Lead Leakage & Marketing Competition.</h3>
                </div>

                <div className={classes.key}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classes.infoIcon}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"></path></svg>

                    <h3>Get AI-Driven Marketing Solution That Allow One-on-One Integration Technique.</h3>
                </div>
            </div>
        </div>

        <div className={classes.hero3} style={{background:"linear-gradient(45deg,#edf1ff,#e8edfc)"}}>
            <h1 style={{fontSize:"1.875rem", lineHeight:"2.25rem", margin:"0"}}>Drive Consistent Site Visit with our</h1>
            <h1 className={classes.mainHeading} style={{fontSize:"1.875rem", lineHeight:"2.25rem", margin:"0"}}>360-degree multi-channel marketing approach.</h1>

            <div className={classes.outComes}>
                <div className="laptopImage" style={{padding:"0rem 5rem", borderRight:"2px solid blue", margin:"0 3rem"}}>
                    <img src={laptopImage} alt="" style={{width:"37rem"}}/>
                </div>

                <div className={classes.keyLines} style={{flexDirection:"column"}}>
                    <div className={classes.key} style={{maxWidth:"80%", display:"flex", boxShadow:"none", height:"4rem", alignItems:"center", gap:"2rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classes.infoIcon}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"></path></svg>

                        <p>Generate leads from 100+ sources like social media, search engines, blogging, affiliate marketing & 100+ sources</p>
                    </div>

                    <div className={classes.key} style={{maxWidth:"80%", display:"flex", boxShadow:"none", height:"4rem", alignItems:"center", gap:"2rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classes.infoIcon}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"></path></svg>

                        <p>Get high-quality exclusive leads that convert.</p>
                    </div>

                    <div className={classes.key} style={{maxWidth:"80%", display:"flex", boxShadow:"none", height:"4rem", alignItems:"center", gap:"2rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classes.infoIcon}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"></path></svg>

                        <p>A full suite CRM to get in touch with Leads in 30 sec. & Track Performance of your team also.</p>
                    </div>

                    <div className={classes.key} style={{maxWidth:"80%", display:"flex", boxShadow:"none", height:"4rem", alignItems:"center", gap:"2rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classes.infoIcon}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"></path></svg>

                        <p>Start getting leads in 24 hours</p>
                    </div>

                    <div className={classes.key} style={{maxWidth:"80%", display:"flex", boxShadow:"none", height:"4rem", alignItems:"center", gap:"2rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classes.infoIcon}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"></path></svg>

                        <p>100% transparency and lead security with our end-to-end encryption</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={classes.leads}>
            <div className={classes.banner}>
                <h1 style={{fontSize:"1.875rem", lineHeight:"2.25rem", margin:"0", color:"white", width:"35rem", textAlign:"center"}}>Get High Quality Leads Package Starts From 25,549/Monthly</h1>
                <p style={{color:"white"}}>Contact sales for a budget of more than ₹5 lakhs.</p>

                <button style={{background:"white", color:"blue", padding:"1.3rem 1.5rem", borderRadius:"0.8rem"}}>GET LEADS</button>
            </div>
        </div>

        <div className={`${classes.testimonials} ${classes.hero}`}>
            <h1 style={{fontSize:"1.875rem", lineHeight:"2.25rem", margin:"0", width:"35rem", textAlign:"center"}}>Testimonials</h1>
            <p style={{fontWeight:"500", color:"rgb(116, 116, 116)", fontSize:"1rem"}}>Our Clients Trust us to Drive Long term Growth.</p>
        </div>

        <div className={`${classes.ourClients} ${classes.tstimonials} ${classes.hero}`}>
            <h1 style={{fontSize:"1.875rem", lineHeight:"2.25rem", margin:"0", width:"35rem", textAlign:"center"}}>Our Clients</h1>
            
            <div className={classes.clients} style={{display:"flex", flexWrap:"wrap"}}>
                <img src={client1} alt="" style={{width:"6rem"}}/>
                <img src={client2} alt="" style={{width:"6rem"}}/>
                <img src={client3} alt="" style={{width:"6rem"}}/>
                <img src={client4} alt="" style={{width:"6rem"}}/>
                <img src={client5} alt="" style={{width:"6rem"}}/>
                <img src={client6} alt="" style={{width:"6rem"}}/>
                <img src={client7} alt="" style={{width:"6rem"}}/>
                <img src={client8} alt="" style={{width:"6rem"}}/>
                <img src={client9} alt="" style={{width:"6rem"}}/>
                <img src={client10} alt="" style={{width:"6rem"}}/>
                <img src={client11} alt="" style={{width:"6rem"}}/>
                <img src={client12} alt="" style={{width:"6rem"}}/>
                <img src={client13} alt="" style={{width:"6rem"}}/>
                <img src={client14} alt="" style={{width:"6rem"}}/>
                <img src={client15} alt="" style={{width:"6rem"}}/>
            </div>
        </div>
        
        <div className={classes.leads}>
            <div className={classes.banner} style={{width:"100vw", borderRadius:"0", flexDirection:"row", justifyContent:"space-between", position:"relative", padding:"5rem 0"}}>
                <div className={classes.bannerFlex} style={{margin:"0 5rem"}}>
                    <h1 style={{fontSize:"1.875rem", lineHeight:"2.25rem", margin:"0", color:"white", width:"27rem"}}>Learn why our Clients Trust us to Drive Long term Growth.</h1>
                    <button style={{background:"white", color:"blue", padding:"1.3rem 1.5rem", borderRadius:"0.8rem"}}>GET STARTED</button>
                </div>

                <img src={banner2} alt="" style={{height:"15rem", position:"absolute", bottom:"0", right:"0"}}/>
            </div>
        </div>

        <div className={classes.contact}>
            <div className={classes.faq}>
                <h1 className={classes.mainHeading} style={{fontSize:"1.1rem", textAlign:"left", borderBottom:"blue"}}>Frequently asked questions</h1>
                
                <div>
                    <Accordion style={{backgroundColor:"transparent", borderBottom:"1px solid rgb(66, 120, 228)", boxShadow:"none", fontSize:"1.03rem", padding:"0.5rem 0"}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        What if the leads I receive are junk?
                        </AccordionSummary>
                        <AccordionDetails style={{boxShadow:"none"}}>
                        We strive to generate leads only from authentic sources. Up to 80% of our leads are of high quality and have a greater potential for conversion. If you receive leads that do not meet your requirements, please let us know.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{backgroundColor:"transparent", borderBottom:"1px solid rgb(66, 120, 228)", boxShadow:"none", fontSize:"1.03rem", padding:"0.5rem 0"}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        >
                        What platforms do you use to generate leads?
                        </AccordionSummary>
                        <AccordionDetails style={{boxShadow:"none"}}>
                        We use Google, Facebook, LinkedIn, Instagram and YouTube to generate leads. Our choice of platform depends on your project and requirement.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{backgroundColor:"transparent", borderBottom:"1px solid rgb(66, 120, 228)", boxShadow:"none", fontSize:"1.03rem", padding:"0.5rem 0"}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        >
                        Will my leads be shared with others?
                        </AccordionSummary>
                        <AccordionDetails style={{boxShadow:"none"}}>
                        The leads we generate for you are exclusively reserved for your project and will not be shared with any other clients. We are committed to ensuring 100% data security and guarantee that your leads will be shared with you only.
                        </AccordionDetails>
                        <AccordionActions>
                        </AccordionActions>
                    </Accordion>
                </div>
            </div>

            <div className={classes.help}>
                <h1 className={classes.mainHeading} style={{fontSize:"2rem", textAlign:"left", borderBottom:"blue"}}>How can we help you</h1>

                <p style={{width:"30rem", textAlign:"left", margin:"2rem 0"}}>Want to learn more about our properties and virtual tours? Get in touch with us today.</p>

                <button>GET STARTED</button>
            </div>
        </div>
        </>
    )
}

export default Home;