import '../index.css'
import { useNavigate } from 'react-router';
import {   useLocation } from 'react-router';
function Header(){
    const navigate = useNavigate();
    const location=useLocation();
    function checkRouter(route){
       if(route === location.pathname)
          return true;
        return false;
    }
    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'> 
          <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img className="h-5 cursor-pointer" src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="img" 
                 onClick={()=>navigate("/")} />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`py-3 text-sm text-gray-500 font-semibold border-b-[3px] border-b-transparent cursor-pointer ${checkRouter("/") && "text-black border-b-red-500"}`}
                    onClick={()=>navigate("/")}>Home</li>
                    <li className={`py-3 text-sm text-gray-500 font-semibold border-b-[3px] border-b-transparent cursor-pointer ${checkRouter("/offers") && "text-black border-b-red-500"}`}
                     onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`py-3 text-sm text-gray-500 font-semibold border-b-[3px] border-b-transparent cursor-pointer ${checkRouter("/signIn") && "text-black border-b-red-500"}`} onClick={()=>navigate("/signIn")}>Sign In</li>
                </ul>
            </div>
          </header>
        </div>
    )
}
export default Header;