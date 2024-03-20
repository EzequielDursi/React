import CartWidget from './CartWidget';
import './NavBar.css'
import {Link} from 'react-router-dom';
export default function NavBar() {

    return (
        <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{/*..icono..*/}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to={'/'}>Home </Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to={'/products'}>Productos </Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to={'/contact'}>Contacto </Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to={'/sales'}>Ofertas </Link></a>
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

