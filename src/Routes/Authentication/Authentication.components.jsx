import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/Firebase.utils/Firebase.utils";
import Signup from "../../Components/sign-up-form/sign-up-form.component";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import './Autentication.styles.scss'

const SignIn = () => {
 useEffect(()=>{
  const fetchredirectInfo = async()=>{ // ab seen kia hai is se mera km to horha tha but mujhe wo cheez nh mil rhi thi jo mujhe chahye wo object jis k zarie se main apne credentials get kr skon
    try { // lekin mene kia kia k ek useEffect ka hook istimal kia jis se jese hi ye component mount/chala to UseEffect hook chal gaya
  const response = await getRedirectResult(auth)      // getRedirectResult se main e object pkra lekin auth se pkra q k isko nh pta kahan se object pkrna hai
  // console.log(response)  // fetching pora async function hai k kb tk googleauth se jwb ata hai to humne islie await se object lia and then console.log
    if(response){// Yani agr response null na ho to user dbase main create krdo.
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
    } catch (error) {
      console.log(error)
    }
  }
  fetchredirectInfo()
 },[])



 


  return (
    <div className="authentication-container">
      <SignInForm />
      <Signup />
    </div>
  );
};

export default SignIn;

// 6 C
