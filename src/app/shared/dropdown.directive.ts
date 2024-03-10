import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective{
    constructor(private elementRef: ElementRef) {}

    @HostListener('click') onClick(){
        this.elementRef.nativeElement.classList.toggle('open');      
    }
}