import Vue from 'vue';
import './navbar.styles.css';

export default {
    template: `
    <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#home">Logo</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#home">HOME</a></li>
          <li><a href="#login">ANMELDEN</a></li>
          <li><a href="#contact">KONTAKT</a></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#more">MEHR
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#merchandise">Merchandise</a></li>
              <li><a href="#extras">Extras</a></li>
              <li><a href="#media">Media</a></li>
            </ul>
          </li>
          <li><a href="#search"><span class="glyphicon glyphicon-search"></span></a></li>
        </ul>
      </div>
    </div>
  </nav>
  `,
}