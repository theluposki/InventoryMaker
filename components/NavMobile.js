export const NavMobile = {
  template:
  `
  <nav class="nav-mobile">
    <router-link to="/" class="nav-mobile__nav-link" exact-active-class="nav-mobile__active-link" exact>
      <i class="ai-home"></i>
      <span>Home</span>
    </router-link>
    &nbsp;&nbsp;&nbsp;
    <router-link to="/about" class="nav-mobile__nav-link" exact-active-class="nav-mobile__active-link" exact>
      <i class="ai-info"></i>
      <span>About</span>
    </router-link>
  <nav>
  `
}
