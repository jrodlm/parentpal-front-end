import { Link } from 'react-router-dom';

// function NavBar() {
//   return (
//     <nav style={styles.nav}>
//       <h2 style={styles.logo}>ParentPal</h2>
//       <div style={styles.links}>
//         <Link to="/" style={styles.link}>Home</Link>
//         <Link to="/login" style={styles.link}>Login</Link>
//         <Link to="/signup" style={styles.link}>Sign Up</Link>
//       </div>
//     </nav>
//   );
// }

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/signin'>Sign In</Link></li>
      </ul>
    </nav>
  );
};

// const styles = {
//   nav: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: '',
//     padding: '1rem 2rem',
//     backgroundColor: '#2C3E50',
//     color: '#ECF0F1',
//   },
//   logo: {
//     margin: 0,
//   },
//   links: {
//     display: 'flex',
//     gap: '1rem',
//   },
//   link: {
//     color: '#ECF0F1',
//     textDecoration: 'none',
//     fontWeight: 'bold',
//   },
// };

export default NavBar;
