import CartWidget from './CartWidget';
import './NavBar.css'
import {Link} from 'react-router-dom';
export default function NavBar() {

    return (
        <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/products'}>Productos </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/contact'}>Contacto </Link>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><CartWidget/></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
   
     

</>
    );
}

