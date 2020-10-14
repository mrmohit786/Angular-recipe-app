import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector : '[appDropdown]'
})

export class DropDownDirective {
   @HostBinding("class.data-toggle='dropdown'") isOpen = false;
    @HostListener("click") toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}