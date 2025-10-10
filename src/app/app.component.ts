import { Component } from '@angular/core';
import { DeclarationComponent } from './declaration/declaration.component';

@Component({
  selector: 'app-root',
  imports: [DeclarationComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'tp02-pollution';
}
