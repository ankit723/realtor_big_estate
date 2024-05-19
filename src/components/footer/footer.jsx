import React from "react";
import classes from './footer.module.css'
import footer from '../background-images/footer.png'

const Footer=()=>{
    return(
        <>
        <footer>
            <div className={classes.root}>
                <div className={classes.child1}>
                    <div className={classes.child3}>
                        <ul>
                            <li><p>Quick Links</p></li>
                            <li><p style={{color:"rgb(157, 163, 174)", fontSize:"0.8rem"}}>About Us</p></li>
                            <li><p style={{color:"rgb(157, 163, 174)", fontSize:"0.8rem"}}>Send Feedback</p></li>
                        </ul>

                    </div>


                    <div className={classes.child3}>
                        <img src={footer} alt="" style={{width:"40rem"}}/>
                    </div>


                    <div className={classes.child3}>
                        <ul>
                            <li><p>Product</p></li>
                            <li><p style={{color:"rgb(157, 163, 174)", fontSize:"0.8rem"}}>View Product</p></li>
                            <li><p style={{color:"rgb(157, 163, 174)", fontSize:"0.8rem"}}>Get Started</p></li>
                        </ul>
                    </div>
                </div>



                <div className={classes.child2}>
                    <div className={classes.chid4}>
                        <p style={{fontSize:"0.9rem"}}>© 2024 Big Growth Digital Pvt Ltd. Copyright and rights reserved</p>
                    </div>

                    <div className={classes.chid5}>
                        <p style={{fontSize:"0.9rem"}}>Terms & Conditions • Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer