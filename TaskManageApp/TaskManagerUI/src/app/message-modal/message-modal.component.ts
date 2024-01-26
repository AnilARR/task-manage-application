// message-modal.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent {
  @Input() message: string = '';
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }

  open() {
    // Logic to open the modal
    // You can customize this logic based on your modal implementation
    // For simplicity, let's assume you have a Bootstrap modal
    // You might need to adjust this based on your specific modal implementation

    // Find the modal element by ID
    const modalElement = document.getElementById('successModal');

    // Open the modal using Bootstrap's modal method
    if (modalElement) {
      // Ensure that Bootstrap JavaScript is loaded in your project
      // This might involve including Bootstrap JS in your project
      // For example, you can add the following to your 'angular.json' file:
      // "scripts": ["node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"]
      modalElement.classList.add('show');
      modalElement.style.display = 'block';

      // Set the message in the modal
      const modalBody = modalElement.querySelector('.modal-body');
      if (modalBody) {
        modalBody.textContent = this.message;
      }
    }
  }
}
