import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
   <header className="header">
    <div className="header__body">
      <div className="header__logo">
        <Link to={'/'}>BlogLogo</Link>
      </div>
      <div className="header__menu">
        <Link to={'/'}>Home</Link>
        <Link to={'/create'}>Create</Link>
      </div>
    </div>
   </header>
   );
}
 
export default Navbar;