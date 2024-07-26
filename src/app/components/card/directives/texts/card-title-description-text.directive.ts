import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardTitleDescriptionText]',
  host: { 'class': 'ca-c-card__description-text'}
})
export class CardTitleDescriptionTextDirective {}
