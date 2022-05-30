function NavBar() {
    return  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" >nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" >novedades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" >productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" >contacto</a>
                </li>
            </ul>

        </div>
    </div>
</nav>
  }
  
  export default NavBar;
  