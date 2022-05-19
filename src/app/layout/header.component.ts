import { Component, HostListener } from "@angular/core";

@Component({
  selector: 'app-header',
  template: `
  <nav
    class="px-0 navbar navbar-expand-md navbar-light sticky-top"
    [class.scrolled]="!this.isTop"
  >
    <div class="p-0 container">
      <span class="navbar-brand"
        >
        <a href="/"><img src="../../assets/images/logo.svg" alt="logo" /></a>
        </span
      ><button
        aria-controls="navbar-nav"
        type="button"
        aria-label="Toggle navigation"
        class="navbar-toggler collapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbar-nav">
        <div class="ml-auto navbar-nav">
          <a href="/projects" class="nav-link">projects</a
          ><a href="/bio" class="nav-link">bio</a
          ><a href="/resume" class="nav-link">resume</a>
        </div>
      </div>
    </div>
  </nav>
  `
})

export class HeaderComponent {
  isTop = true;

  constructor() { }


  @HostListener('window:scroll', ['$event'])
  scroll(event): void {
    const newIsTop: boolean = window.scrollY < 100;
    if (newIsTop !== this.isTop) {
      this.isTop = newIsTop;
    }
  }
}
