import { Component } from '@angular/core';

import { LucideAngularModule, Mail, MapPin, Phone } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  protected readonly lucideIcons = {
    mapPin: MapPin,
    phone: Phone,
    mail: Mail
  };

  protected readonly currentYear = new Date().getFullYear();
}
